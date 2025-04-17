import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import {
  headerContainerResponsive,
  logoHomeResponsive,
  sloganResponsive
} from '../../styles/mixins'

export const HeaderContainer = styled.div`
  height: 384px;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${headerContainerResponsive}
`

export const Logo = styled.img`
  margin-top: 64px;
  margin-bottom: 138px;

  ${logoHomeResponsive}
`

export const SloganText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.primary};
  max-width: 540px;
  margin-bottom: 40px;

  ${sloganResponsive}
`
