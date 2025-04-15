import { HeaderContainer, Logo, SloganText } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <SloganText>
        Viva experiências gastronômicas no conforto da sua casa
      </SloganText>
    </HeaderContainer>
  )
}

export default Header
