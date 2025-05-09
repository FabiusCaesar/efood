import Button from '../../Button'
import AnimatedSidebarContainer from '../../Sidebar'
import {
  clearOverlay,
  setOverlayContext
} from '../../../store/reducers/overlay'
import { AppDispatch, RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ButtonGroup } from '../CheckoutFormBaseStyles/styles'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../../store/reducers/cart'
import { closeSidebar } from '../../../store/reducers/ui'

const SuccessMessage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const orderId = useSelector((state: RootState) => state.checkout.orderId)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  const handleConclude = () => {
    dispatch(closeSidebar())
    dispatch(clearOverlay())
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <AnimatedSidebarContainer>
      <h3>Pedido realizado - {orderId}</h3>

      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{' '}
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <ButtonGroup>
        <Button
          variant="secondary"
          title="Clique aqui para concluir"
          onClick={handleConclude}
        >
          Concluir
        </Button>
      </ButtonGroup>
    </AnimatedSidebarContainer>
  )
}

export default SuccessMessage
