import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import DeliveryForm from '../../components/Checkout/DeliveryForm'
import { useEffect } from 'react'
import { setOverlayContext } from '../../store/reducers/overlay'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { goToPayment } from '../../store/reducers/ui'
import { saveDeliveryData } from '../../store/reducers/checkout'

interface DeliveryFormValues {
  fullName: string
  address: string
  city: string
  zip: string
  number: string
  adressDetails?: string
}

const validationSchema = Yup.object({
  fullName: Yup.string().required('⚠️ Informe o nome do destinatário'),
  address: Yup.string().required('⚠️ Informe o endereço'),
  city: Yup.string().required('⚠️ Informe a cidade'),
  zip: Yup.string()
    .matches(/^\d{5}-\d{3}$/, '⚠️ Informe um CEP válido<br />(ex: 12345-678)')
    .required('⚠️ Informe o CEP'),
  number: Yup.string().required('⚠️ Informe o número'),
  adressDetails: Yup.string()
})

// Componente que escuta o Formik e despacha os valores para o Redux
const FormikContextListener = () => {
  const { values } = useFormikContext<DeliveryFormValues>()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(saveDeliveryData(values))
  }, [values, dispatch])

  return null
}

const DeliveryFormController = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  const deliveryData = useSelector(
    (state: RootState) => state.checkout.deliveryData
  )

  return (
    <Formik
      initialValues={deliveryData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(saveDeliveryData(values))
        dispatch(goToPayment())
      }}
    >
      <>
        <FormikContextListener />
        <DeliveryForm />
      </>
    </Formik>
  )
}

export default DeliveryFormController
