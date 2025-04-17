import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import colors from '../../styles/colors'
import {
  headerRestauranteResponsive,
  logoRestauranteResponsive
} from '../../styles/mixins'

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

  ${headerRestauranteResponsive}
`

export const LeftSide = styled.div`
  z-index: 1;
`

export const RightSide = styled.div`
  z-index: 1;

  .quebra-mobile {
    display: none;
  }

  @media (max-width: 375px) {
    .quebra-mobile {
      display: inline;
    }
  }
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translate(-50%, -50%);

  ${logoRestauranteResponsive}
`
