import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const OverlayContainer = styled(motion.button)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  border: none;
  z-index: 10;
`
