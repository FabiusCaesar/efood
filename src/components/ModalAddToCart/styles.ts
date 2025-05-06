import styled from 'styled-components'
import { motion } from 'framer-motion'

import colors from '../../styles/colors'
import { media } from '../../styles/mixins'

import closeIcon from '../../assets/images/close_icon.png'

export const Container = styled.div`
  position: fixed;
  //top: 0;
  //left: 0;
  inset: 0; // substitui top/left/right/bottom
  //width: 100%;
  //height: 100%;
  z-index: 30;
  pointer-events: none; // desativa clique no espaço ao redor

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MotionContent = styled(motion.div)`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 344px;
  position: relative;
  z-index: 30;

  display: flex;
  gap: 24px;
  padding: 32px;
  pointer-events: auto; // reativa cliques apenas aqui

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

export const Header = styled.header`
  width: 100%;
  max-height: 32px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p + p {
    margin-top: 24px;
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
    width: fit-content;
    margin-top: 16px;

    ${media.mobile`
      max-width: 100%;
      width: 100%;
      `}
  }
`
