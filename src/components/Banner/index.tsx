import { Container, Content, Nome, Tipo } from './styles'

type Props = {
  imagem: string
  tipo: string
  nome: string
}

const Banner = ({ imagem, tipo, nome }: Props) => (
  <Container $backgroundImage={imagem}>
    <Content className="container">
      <Tipo>{tipo}</Tipo>
      <Nome>{nome}</Nome>
    </Content>
  </Container>
)

export default Banner
