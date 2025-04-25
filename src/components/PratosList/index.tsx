import { Container, List } from './styles'
import PratoCard from '../../components/PratoCard'
import { PratoModel } from '../../models/RestauranteModel'

const PratosList = ({ pratos }: { pratos: PratoModel[] }) => {
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
