import { HeaderContainer, Logo, SloganText } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SloganText>
        Viva experiências gastronômicas no conforto da sua casa
      </SloganText>
    </HeaderContainer>
  )
}

export default HeaderHome
