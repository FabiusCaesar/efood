import styled from 'styled-components'
import colors from '../../styles/colors'
import { media } from '../../styles/mixins'

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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  max-width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;

  ${media.mobile`
      height: 95%;
    `}
`
export const ModalHeader = styled.header`
  width: 100%;
  max-height: 32px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`

export const ModalImg = styled.div``

export const ModalInnerContent = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 32px 32px;

  ${media.mobile`
    flex-direction: column;
    justify-content: space-between;
    `}

  img {
    display: block;
    max-width: 280px;
    height: 280px;
    object-fit: cover;
    object-position: center;

    ${media.mobile`
        max-width: 100%;
      `}
  }
`

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
  }
`

export const TituloEDescricaoWrapper = styled.div``

export const PorcaoEButtomWrapper = styled.div``
