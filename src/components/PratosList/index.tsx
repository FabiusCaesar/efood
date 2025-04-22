import { Container, List } from './styles'
import PratoCard from '../../components/PratoCard'
import { PratoModel } from '../../models/RestauranteModel'

const PratosList = ({ pratos }: { pratos: PratoModel[] }) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <PratoCard key={prato.id} {...prato} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PratosList
