import React from 'react'

import { ButtonContainer } from './styles'

type Props = {
  children: React.ReactNode
  title?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'default' | 'dish'
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  title,
  onClick,
  disabled,
  variant = 'default',
  type = 'button'
}: Props) => (
  <ButtonContainer
    title={title}
    onClick={onClick}
    disabled={disabled}
    $variant={variant}
    type={type}
  >
    {children}
  </ButtonContainer>
)

export default Button
