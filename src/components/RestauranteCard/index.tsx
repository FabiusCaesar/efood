import Tag from '../Tag'
import {
  Avaliacao,
  BotaoResponsivo,
  Card,
  CardContent,
  CardImg,
  Descricao,
  DescricaoContainer,
  TagsWrapper,
  Titulo,
  TituloContainer
} from './styles'

import estrela from '../../assets/images/estrela_avaliacao.png'
import { Restaurant } from '../../models/Restaurant'

const RestauranteCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Restaurant) => {
  return (
    <Card to={`/restaurante/${id}`}>
      <TagsWrapper>
        {destacado == true && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </TagsWrapper>

      <CardImg src={capa} alt={titulo} />

      <CardContent>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
          <Avaliacao>
            <p>{avaliacao}</p>
            <img src={estrela} />
          </Avaliacao>
        </TituloContainer>

        <DescricaoContainer>
          <Descricao>{descricao}</Descricao>
          <BotaoResponsivo title="Clique aqui para saber mais">
            Saiba mais
          </BotaoResponsivo>
        </DescricaoContainer>
      </CardContent>
    </Card>
  )
}

export default RestauranteCard
