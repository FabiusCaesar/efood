import { useDispatch, useSelector } from 'react-redux'
import { formatPrice, getTotalPrice } from '../../../utils/priceUtils'
import Button from '../../Button'
import * as S from '../CheckoutFormBaseStyles/styles'
import { RootState } from '../../../store'
import AnimatedSidebarContainer from '../../Sidebar'
import { setOverlayContext } from '../../../store/reducers/overlay'
import { AppDispatch } from '../../../store'
import { useEffect } from 'react'
import { goToDelivery, goToSuccess } from '../../../store/reducers/ui'

const PaymentForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  return (
    <AnimatedSidebarContainer>
      <h3>
        Pagamento - Valor a pagar{' '}
        <span>{formatPrice(getTotalPrice(items))}</span>
      </h3>
      <S.Form>
        <S.InputGroup>
          <label htmlFor="cardOwner">Nome no Cartão</label>
          <input type="text" id="cardOwner" name="cardOwner" />
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input type="number" id="cardNumber" name="cardNumber" />
          </S.InputGroup>

          <S.InputGroup maxWidth="88px">
            <label htmlFor="cardCode">CVV</label>
            <input type="text" id="cardCode" name="cardCode" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input type="number" id="expiresMonth" name="expiresMonth" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input type="text" id="expiresYear" name="expiresYear" />
          </S.InputGroup>
        </S.Row>

        <S.ButtonGroup>
          <Button
            variant="dish"
            title="Clique aqui para finalizar o pagamento"
            onClick={() => dispatch(goToSuccess())}
          >
            Finalizar pagamento
          </Button>
          <Button
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
