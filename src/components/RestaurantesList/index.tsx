import RestauranteCard from '../RestauranteCard'
import { Container, List } from './styles'
import RestauranteModel from '../../models/RestauranteModel'

export type Props = {
  restaurantes: RestauranteModel[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <RestauranteCard
              key={restaurante.id}
              id={restaurante.id}
              titulo={restaurante.titulo}
              tipo={restaurante.tipo}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              slug={restaurante.slug}
              destaque={restaurante.destaque}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantesList
