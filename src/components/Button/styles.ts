import styled from 'styled-components'
import colors from '../../styles/colors'

type ButtonProps = {
  variant?: 'default' | 'prato'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'prato' ? colors.secondary : colors.primary};
  color: ${(props) =>
    props.variant === 'prato' ? colors.primary : colors.secondary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
