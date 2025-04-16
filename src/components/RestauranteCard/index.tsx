import Button from '../Button'
import Tag from '../Tag'
import {
  Avaliacao,
  Card,
  CardContent,
  CardImg,
  Descricao,
  TagsWrapper,
  Titulo,
  TituloContainer
} from './styles'

import estrela from '../../assets/images/estrela_avaliacao.png'

type Props = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  slug: string
  destaque?: boolean
}

const RestauranteCard = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  slug,
  destaque
}: Props) => {
  const imagemCard = require(
    `../../assets/images/restaurantes/${slug}/imagem_card.png`
  )
  return (
    <Card to={`/restaurante/${id}`}>
      <TagsWrapper>
        {destaque && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </TagsWrapper>
      <CardImg src={imagemCard} alt={titulo} />
      <CardContent>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
          <Avaliacao>
            <p>{avaliacao}</p>
            <img src={estrela} />
          </Avaliacao>
        </TituloContainer>
        <Descricao>{descricao}</Descricao>
        <Button title="Clique aqui para saber mais">Saiba mais</Button>
      </CardContent>
    </Card>
  )
}

export default RestauranteCard
