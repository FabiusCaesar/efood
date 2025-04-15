import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'

export const HeaderContainer = styled.div`
  height: 384px;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 64px;
  margin-bottom: 138.5px;
`

export const SloganText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.primary};
  max-width: 540px;
  margin-bottom: 40px;
`
