import { motion } from 'framer-motion'
import { styled } from 'styled-components'
import colors from '../../styles/colors'
import { media } from '../../styles/mixins'
import { ButtonContainer } from '../Button/styles'

export const SidebarContainer = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 20;
  padding: 32px 8px;
  color: ${colors.secondary};

  ${media.mobile`
    max-width: 80%
    `}

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  // Para o texto do carrinho vazio
  h4 {
    font-size: 16px;
    font-weight: 900;
    line-height: 22px;
    text-align: center;
    margin: 0 32px 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  p + p {
    margin-top: 24px;
  }
`
