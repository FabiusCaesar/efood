import { Container, List } from './styles'
import PratoCard from '../../components/PratoCard'
import { Dish } from '../../models/Restaurant'

const PratosList = ({ pratos }: { pratos: Dish[] }) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <PratoCard {...prato} />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PratosList
