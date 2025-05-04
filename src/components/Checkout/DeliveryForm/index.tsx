import { useEffect } from 'react'
import Button from '../../Button'
import AnimatedSidebarContainer from '../../Sidebar'
import * as S from '../CheckoutFormBaseStyles/styles'
import { setOverlayContext } from '../../../store/reducers/overlay'
import { AppDispatch } from '../../../store'
import { useDispatch } from 'react-redux'
import { goToCart, goToPayment } from '../../../store/reducers/ui'

const DeliveryForm = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  return (
    <AnimatedSidebarContainer>
      <h3>Entrega</h3>
      <S.Form>
        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input type="text" id="fullName" name="fullName" />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" name="address" />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" name="city" />
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="zip">CEP</label>
            <input type="number" id="zip" name="zip" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input type="number" id="number" name="number" />
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="adressDetails">Complemento (opcional)</label>
          <input type="text" id="adressDetails" name="adressDetails" />
        </S.InputGroup>

        <S.ButtonGroup>
          <Button
            type="button"
            variant="prato"
            title="Clique aqui para seguir para o pagamento"
            onClick={() => dispatch(goToPayment())}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            variant="prato"
            title="Clique aqui para voltar ao carrinho"
            onClick={() => dispatch(goToCart())}
          >
            Voltar para o carrinho
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </AnimatedSidebarContainer>
  )
}

export default DeliveryForm
