import styled from 'styled-components'

import colors from '../../../styles/colors'

export const Form = styled.form`
  font-size: 14px;
  font-weight: 700;

  > * + * {
    margin-top: 8px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    font-size: 14px;
    font-weight: 700;
    height: 32px;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    color: ${colors.inputText};
    padding: 8px;
    box-shadow: inset 0 -1px 0 0 transparent; // altura inicial oculta
    transition: box-shadow 0.3s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: inset 0 -1px 0 0 ${colors.primary};
    }
  }
`

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  min-width: 0; // evita overflow lateral ao forçar quebra interna
  max-width: ${(props) => props.maxWidth || 'auto'};
`

export const Row = styled.div`
  display: flex;
  gap: 32px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${colors.text};
  //text-align: right;
  margin: 2px 8px 0;
`
