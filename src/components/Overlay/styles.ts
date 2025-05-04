import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const OverlayContainer = styled(motion.button)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  z-index: 10;
`
