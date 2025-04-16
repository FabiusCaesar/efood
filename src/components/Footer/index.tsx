import { Copyright, FooterContainer, Logo, SocialMedia } from './styles'

import logo from '../../assets/images/logo.png'
import socialmedia from '../../assets/images/social_media.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SocialMedia src={socialmedia} />
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
