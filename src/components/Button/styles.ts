import styled from 'styled-components'
import colors from '../../styles/colors'

type ButtonProps = {
  $variant?: 'default' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$variant === 'secondary' ? colors.secondary : colors.primary};
  color: ${(props) =>
    props.$variant === 'secondary' ? colors.primary : colors.secondary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: none;
    transform: none;
  }
`
