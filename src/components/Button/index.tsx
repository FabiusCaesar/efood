import React from 'react'

import { ButtonContainer } from './styles'

type Props = {
  children: React.ReactNode
  title?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'default' | 'prato'
}

const Button = ({
  children,
  title,
  onClick,
  disabled,
  variant = 'default'
}: Props) => (
  <ButtonContainer
    title={title}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </ButtonContainer>
)

export default Button
