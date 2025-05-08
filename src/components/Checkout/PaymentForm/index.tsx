import { useDispatch, useSelector } from 'react-redux'
import { formatPrice, getTotalPrice } from '../../../utils/priceUtils'
import Button from '../../Button'
import * as S from '../CheckoutFormBaseStyles/styles'
import { RootState } from '../../../store'
import AnimatedSidebarContainer from '../../Sidebar'
import { AppDispatch } from '../../../store'
import { goToDelivery } from '../../../store/reducers/ui'
import { FormikValues, useFormikContext } from 'formik'
import { PulseLoader } from 'react-spinners'

const PaymentForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.cart.items)
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting
  } = useFormikContext<FormikValues>()

  return (
    <AnimatedSidebarContainer>
      <h3>
        Pagamento - Valor a pagar{' '}
        <span>{formatPrice(getTotalPrice(items))}</span>
      </h3>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <label htmlFor="cardOwner">Nome no Cartão</label>
          <input
            type="text"
            id="cardOwner"
            name="cardOwner"
            value={values.cardOwner}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.cardOwner && typeof errors.cardOwner === 'string' && (
            <S.ErrorMessage>{errors.cardOwner}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={values.cardNumber}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '').slice(0, 16) // até 16 dígitos
                const masked = raw.replace(/(\d{4})(?=\d)/g, '$1 ')
                handleChange({
                  target: {
                    name: 'cardNumber',
                    value: masked.trim()
                  }
                })
              }}
              onBlur={handleBlur}
            />
            {touched.cardNumber && typeof errors.cardNumber === 'string' && (
              <S.ErrorMessage>{errors.cardNumber}</S.ErrorMessage>
            )}
          </S.InputGroup>

          <S.InputGroup maxWidth="88px">
            <label htmlFor="cardCode">CVV</label>
            <input
              type="text"
              id="cardCode"
              name="cardCode"
              value={values.cardCode}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '').slice(0, 3)
                handleChange({
                  target: {
                    name: 'cardCode',
                    value: raw
                  }
                })
              }}
              onBlur={handleBlur}
            />
            {touched.cardCode && typeof errors.cardCode === 'string' && (
              <S.ErrorMessage>{errors.cardCode}</S.ErrorMessage>
            )}
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              type="text"
              id="expiresMonth"
              name="expiresMonth"
              value={values.expiresMonth}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, '').slice(0, 2)
                const sanitized = parseInt(input) > 12 ? '12' : input
                handleChange({
                  target: {
                    name: 'expiresMonth',
                    value: sanitized
                  }
                })
              }}
              onBlur={handleBlur}
            />
            {touched.expiresMonth &&
              typeof errors.expiresMonth === 'string' && (
                <S.ErrorMessage>{errors.expiresMonth}</S.ErrorMessage>
              )}
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              type="text"
              id="expiresYear"
              name="expiresYear"
              value={values.expiresYear}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '').slice(0, 2)
                handleChange({
                  target: {
                    name: 'expiresYear',
                    value: raw
                  }
                })
              }}
              onBlur={handleBlur}
            />
            {touched.expiresYear && typeof errors.expiresYear === 'string' && (
              <S.ErrorMessage
                dangerouslySetInnerHTML={{ __html: errors.expiresYear }}
              />
            )}
          </S.InputGroup>
        </S.Row>

        <S.ButtonGroup>
          <Button
            type="submit"
            variant="dish"
            title="Clique aqui para finalizar o pagamento"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <PulseLoader color="#E66767" size={6} />
            ) : (
              'Finalizar pagamento'
            )}
          </Button>
          <Button
            type="button"
            variant="dish"
            title="Clique aqui para voltar para os dados de entrega"
            onClick={() => dispatch(goToDelivery())}
          >
            Voltar para a edição de endereço
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </AnimatedSidebarContainer>
  )
}

export default PaymentForm
