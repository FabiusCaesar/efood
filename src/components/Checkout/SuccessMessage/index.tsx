import Button from '../../Button'
import AnimatedSidebarContainer from '../../Sidebar'
import { setOverlayContext } from '../../../store/reducers/overlay'
import { AppDispatch } from '../../../store'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ButtonGroup } from '../CheckoutFormBaseStyles/styles'

const SuccessMessage = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))
  }, [dispatch])

  return (
    <AnimatedSidebarContainer>
      <h3>Pedido realizado -</h3>

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
        <Button variant="dish" title="Clique aqui para concluir">
          Concluir
        </Button>
      </ButtonGroup>
    </AnimatedSidebarContainer>
  )
}

export default SuccessMessage
