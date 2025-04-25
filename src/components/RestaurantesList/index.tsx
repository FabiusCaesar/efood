import RestauranteCard from '../RestauranteCard'
import { Container, List } from './styles'
import { RestauranteModel } from '../../models/RestauranteModel'

const RestaurantesList = ({
  restaurantes
}: {
  restaurantes: RestauranteModel[]
}) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <li key={restaurante.id}>
              <RestauranteCard {...restaurante} />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantesList
