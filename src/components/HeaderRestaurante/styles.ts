import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import breakpoints from '../../styles/breakpoints'

export const HeaderContainer = styled.header`
  position: relative;
  height: 186px;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 170px;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};

  @media (max-width: ${breakpoints.desktop}) {
    height: 100px;
    font-size: 16px;
    padding: 0 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 72px;
    font-size: 12px;
    padding: 0 16px;
  }
`

export const LeftSide = styled.div`
  z-index: 1;
`

export const RightSide = styled.div`
  z-index: 1;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${breakpoints.desktop}) {
    height: 36px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 24px;
  }
`
