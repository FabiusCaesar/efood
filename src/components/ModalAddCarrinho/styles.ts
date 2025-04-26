import styled from 'styled-components'
import colors from '../../styles/colors'
import { media } from '../../styles/mixins'

import closeIcon from '../../assets/images/close_icon.png'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
`

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 344px;
  position: relative;
  z-index: 1;

  display: flex;
  gap: 24px;
  padding: 32px;

  img {
    display: block;
    max-width: 280px;
    height: 280px;
    object-fit: cover;
    object-position: center;

    ${media.mobile`
      max-width: 100%;
      height: auto;
    `}
  }

  ${media.mobile`
      height: 95%;
      flex-direction: column;
      //justify-content: space-between;
    `}
`
export const CloseButton = styled.button`
  background-image: url(${closeIcon});
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ModalHeader = styled.header`
  width: 100%;
  max-height: 32px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`

export const ModalImg = styled.div``

export const ModalInnerContent = styled.div``

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    ${media.mobile`
        margin-bottom: 24px;
      `}
  }

  button {
    margin-top: 16px;

    ${media.mobile`
      max-width: 100%;
      width: 100%;
      `}
  }
`

export const TituloEDescricaoWrapper = styled.div``

export const PorcaoEButtomWrapper = styled.div``
