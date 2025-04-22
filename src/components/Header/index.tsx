import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  LeftSide,
  Logo,
  LogoWrapper,
  RightSide,
  SloganText,
  SloganWrapper
} from './styles'

type Props = {
  type: 'home' | 'restaurante'
}

const Header = ({ type }: Props) => {
  return (
    <HeaderContainer type={type}>
      <LogoWrapper>
        {type === 'restaurante' && (
          <LeftSide>
            <h3>Restaurantes</h3>
          </LeftSide>
        )}

        <Link to="/">
          <Logo src={logo} alt="Logo EFOOD" />
        </Link>

        {type === 'restaurante' && (
          <RightSide>
            <span>
              0 - produto(s)
              <br className="quebra-mobile" /> no carrinho
            </span>
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
    </HeaderContainer>
  )
}

export default Header
