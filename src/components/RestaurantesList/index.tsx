import RestauranteCard from '../RestauranteCard'
import { Container, List } from './styles'
import RestauranteClass from '../../models/RestauranteClass'

export type Props = {
  restaurantes: RestauranteClass[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <RestauranteCard
              key={restaurante.id}
              titulo={restaurante.titulo}
              tipo={restaurante.tipo}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              img={restaurante.img}
              destaque={restaurante.destaque}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantesList
