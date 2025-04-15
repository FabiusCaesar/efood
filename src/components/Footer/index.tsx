import { Copyright, FooterContainer, Logo, SocialMedia } from './styles'

import logo from '../../assets/images/logo.png'
import socialmedia from '../../assets/images/social_media.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} />
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
