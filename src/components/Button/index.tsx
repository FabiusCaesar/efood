import React from 'react'

import { ButtonContainer } from './styles'

type Props = {
  children: React.ReactNode
  title?: string
  onClick?: () => void
  variant?: 'default' | 'prato'
}

const Button = ({ children, title, onClick, variant = 'default' }: Props) => (
  <ButtonContainer title={title} onClick={onClick} variant={variant}>
    {children}
  </ButtonContainer>
)

export default Button
