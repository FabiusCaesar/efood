import { Container, List } from './styles'
import { Dish } from '../../models/Restaurant'
import DishCard from '../DishCard'

type Props = {
  dishes: Dish[]
  onDishClick: (dish: Dish) => void
}

const DishList = ({ dishes, onDishClick }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <DishCard {...dish} onClick={onDishClick} />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default DishList
