import { Formik, FormikHelpers, useFormikContext } from 'formik'
import * as Yup from 'yup'
import PaymentForm from '../../components/Checkout/PaymentForm'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { useEffect } from 'react'
import { setOverlayContext } from '../../store/reducers/overlay'
import { goToSuccess } from '../../store/reducers/ui'
import { savePaymentData, setOrderId } from '../../store/reducers/checkout'
import { checkoutRequest } from '../../services/checkout'

interface PaymentFormValues {
  cardOwner: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

const validationSchema = Yup.object({
  cardOwner: Yup.string()
    .required('⚠️ Informe o nome no cartão')
    .min(5, '⚠️ Nome muito curto'),
  cardNumber: Yup.string()
    .matches(/^(\d{4} ){3}\d{4}$/, '⚠️ Número do cartão inválido')
    .required('⚠️ Informe o número do cartão'),
  cardCode: Yup.string()
    .matches(/^\d{3}$/, '⚠️ CVV deve ter exatamente 3 dígitos')
    .required('⚠️ Informe o código de segurança'),
  expiresMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, '⚠️ Mês inválido')
    .required('⚠️ Informe o mês de vencimento'),
  expiresYear: Yup.string()
    .matches(
      /^\d{2}$/,
      '⚠️ Ano inválido<br />Use os dois últimos dígitos do ano'
    )
    .required('⚠️ Informe o ano de vencimento')
})

// Componente que escuta o Formik e despacha os valores para o Redux em tempo real
const FormikContextListener = () => {
  const { values } = useFormikContext<PaymentFormValues>()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(savePaymentData(values))
  }, [values, dispatch])

  return null
}

const PaymentFormController = () => {
  const dispatch = useDispatch<AppDispatch>()
  const deliveryData = useSelector(
    (state: RootState) => state.checkout.deliveryData
  )
  const paymentData = useSelector(
    (state: RootState) => state.checkout.paymentData
  )
  const cartItems = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  const handleSubmit = async (
    values: PaymentFormValues,
    { setSubmitting }: FormikHelpers<PaymentFormValues>
  ) => {
    const payload = {
      products: cartItems.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: deliveryData.fullName,
        address: {
          description: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.zip,
          number: Number(deliveryData.number),
          complement: deliveryData.adressDetails || ''
        }
      },
      payment: {
        card: {
          name: paymentData.cardOwner,
          number: paymentData.cardNumber.replace(/\s/g, ''), // remove espaços
          code: Number(paymentData.cardCode),
          expires: {
            month: Number(paymentData.expiresMonth),
            year: Number(paymentData.expiresYear)
          }
        }
      }
    }
    try {
      const result = await checkoutRequest(payload)

      if (result) {
        dispatch(setOrderId(result.orderId))
        dispatch(goToSuccess())
      }
    } catch (error) {
      console.error('Erro ao finalizar o pedido:', error)
      alert('❌ Não foi possível finalizar o pedido. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={paymentData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <>
        <FormikContextListener />
        <PaymentForm />
      </>
    </Formik>
  )
}

export default PaymentFormController
