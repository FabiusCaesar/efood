import RestauranteCard from '../RestauranteCard'

import { Restaurant } from '../../models/Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurante) => (
            <li key={restaurante.id}>
              <RestauranteCard {...restaurante} />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
