import { ButtonContainer } from './styles'

type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ title, to, onClick, children }: Props) => {
  return (
    <ButtonContainer title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
