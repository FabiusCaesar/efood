import { Container, Nome, Tipo } from './styles'

type Props = {
  imagem: string
  tipo: string
  nome: string
}

const Banner = ({ imagem, tipo, nome }: Props) => (
  <Container backgroundImage={imagem}>
    <Tipo>{tipo}</Tipo>
    <Nome>{nome}</Nome>
  </Container>
)

export default Banner
