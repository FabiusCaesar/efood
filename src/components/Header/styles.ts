import styled, { css } from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import {
  headerContainerHomeResponsive,
  headerContainerRestauranteResponsive,
  logoResponsive,
  LogoWrapperResponsive,
  sloganResponsive,
  SloganWrapperResponsive
} from '../../styles/mixins'
import breakpoints from '../../styles/breakpoints'

type HeaderProps = {
  type: 'home' | 'restaurant'
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;

  ${(props) =>
    props.type === 'home'
      ? css`
          height: 384px;
          position: relative;
          display: flex;
          flex-direction: column;

          ${headerContainerHomeResponsive}
        `
      : css`
          ${headerContainerRestauranteResponsive}
        `}
`

export const Content = styled.div`
  width: 100%;
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};

  ${LogoWrapperResponsive}
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translate(-50%, -50%);

  transition:
    transform 0.2s ease-in-out,
    filter 0.2s ease-in-out;

  &:hover {
    transform: translate(-50%, -50%) rotate(4deg) scale(1.05);
  }

  ${logoResponsive}
`

export const SloganWrapper = styled.div`
  width: 100%;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px; // conferir isso!

  ${SloganWrapperResponsive}
`

export const SloganText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 120%;
  text-align: center;
  color: ${colors.primary};
  max-width: 540px;
  margin-bottom: 40px;

  ${sloganResponsive}
`

export const LeftSide = styled.div`
  z-index: 1;
`

export const RightSide = styled.div`
  z-index: 1;

  .quebra-mobile {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .quebra-mobile {
      display: inline;
    }
  }
`

export const CartButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 2px solid ${colors.primary};
  }

  &:hover {
    transform: rotate(4deg);
    filter: brightness(1.2);
  }
`
