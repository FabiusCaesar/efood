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
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  img: string
  destaque?: boolean
}

const RestauranteCard = ({
  titulo,
  tipo,
  avaliacao,
  descricao,
  img,
  destaque
}: Props) => (
  <Card>
    <TagsWrapper>
      {destaque && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </TagsWrapper>
    <CardImg src={img} alt={titulo} />
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

export default RestauranteCard
