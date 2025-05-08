import styled from 'styled-components'
import colors from '../../styles/colors'

type ButtonProps = {
  $variant?: 'default' | 'dish'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$variant === 'dish' ? colors.secondary : colors.primary};
  color: ${(props) =>
    props.$variant === 'dish' ? colors.primary : colors.secondary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
