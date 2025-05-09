import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import {
  copyrightResponsive,
  footerResponsive,
  logoFooterResponsive,
  socialFooterResponsive
} from '../../styles/mixins'

export const FooterContainer = styled.div`
  height: 298px;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${footerResponsive}
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 64px;
  margin-bottom: 32px;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(4deg) scale(1.05);
  }

  ${logoFooterResponsive}
`

export const SocialMedia = styled.img`
  width: 88px;
  height: 24px;
  margin-bottom: 80px;

  ${socialFooterResponsive}
`

export const Copyright = styled.h4`
  font-size: 10px;
  text-align: center;
  color: ${colors.primary};
  max-width: 480px;
  margin-bottom: 40px;

  ${copyrightResponsive}
`
