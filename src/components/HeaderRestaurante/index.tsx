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
        <div>0 - produto(s) no carrinho</div>
      </RightSide>
    </HeaderContainer>
  )
}

export default HeaderRestaurante
