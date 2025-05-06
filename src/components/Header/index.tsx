import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {
  CartButton,
  Content,
  HeaderContainer,
  LeftSide,
  Logo,
  LogoWrapper,
  RightSide,
  SloganText,
  SloganWrapper
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { goToCart } from '../../store/reducers/ui'
import { RootState } from '../../store'

type Props = {
  type: 'home' | 'restaurant'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootState) => state.cart)

  const itemQuantity = items.length === 1 ? 'produto' : 'produtos'

  return (
    <HeaderContainer type={type}>
      <Content className="container">
        <LogoWrapper>
          {type === 'restaurant' && (
            <LeftSide>
              <h3>Restaurantes</h3>
            </LeftSide>
          )}

          <Link to="/">
            <Logo src={logo} alt="Logo EFOOD" />
          </Link>

          {type === 'restaurant' && (
            <RightSide>
              <CartButton
                onClick={() => dispatch(goToCart())}
                title="Clique aqui para abrir o carrinho"
              >
                {items.length} - {itemQuantity}
                <br className="quebra-mobile" /> no carrinho
              </CartButton>
            </RightSide>
          )}
        </LogoWrapper>
        {type === 'home' && (
          <SloganWrapper>
            <SloganText>
              Viva experiências gastronômicas no conforto da sua casa
            </SloganText>
          </SloganWrapper>
        )}
      </Content>
    </HeaderContainer>
  )
}

export default Header
