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
            <RestauranteCard key={restaurante.id} {...restaurante} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantesList
