import { PratoModel } from '../../models/RestauranteModel'
import Button from '../Button'
import { Card, CardContent, Descricao, Img, Titulo } from './styles'

const PratoCard = ({ nome, descricao, foto }: PratoModel) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 140) {
      return descricao.slice(0, 137) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <CardContent>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Button title={`Adicionar ${nome} ao carrinho`} variant="prato">
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  )
}

export default PratoCard
