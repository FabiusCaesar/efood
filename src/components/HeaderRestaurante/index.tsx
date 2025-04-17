import { HeaderContainer, LeftSide, RightSide, Logo } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const HeaderRestaurante = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <h3>Restaurantes</h3>
      </LeftSide>

      <Link to="/">
        <Logo src={logo} alt="Logo EFOOD" />
      </Link>

      <RightSide>
        <span>
          0 - produto(s)
          <br className="quebra-mobile" /> no carrinho
        </span>
      </RightSide>
    </HeaderContainer>
  )
}

export default HeaderRestaurante
