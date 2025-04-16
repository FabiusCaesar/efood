import Button from '../Button'
import { Card, CardContent, Descricao, Img, Titulo } from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
}

const PratoCard = ({ nome, descricao, imagem }: Props) => {
  return (
    <Card>
      <Img src={imagem} alt={nome} />
      <Titulo>{nome}</Titulo>
      <CardContent>
        <Descricao>{descricao}</Descricao>
        <Button title={`Adicionar ${nome} ao carrinho`} variant="prato">
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  )
}

export default PratoCard
