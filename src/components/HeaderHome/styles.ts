import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import breakpoints from '../../styles/breakpoints'

export const HeaderContainer = styled.div`
  height: 384px;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    height: 250px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 72x;
  }
`

export const Logo = styled.img`
  margin-top: 64px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 36px;
    margin-bottom: 50px;
    height: 36px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 16px;
    margin-bottom: 48px;
    height: 24px;
  }
`

export const SloganText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.primary};
  max-width: 540px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    line-height: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    line-height: 100%;
  }
`
