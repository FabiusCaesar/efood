import pratosPorRestaurante from '../../data/pratosPorRestaurante'
import { Container, List } from './styles'
import PratoCard from '../../components/PratoCard'
import { useParams } from 'react-router-dom'
import restaurantes from '../../data/restaurantes'

const PratosList = () => {
  const { id } = useParams()
  const restauranteId = Number(id)

  const restaurante = restaurantes.find((r) => r.id === restauranteId)
  const pratos = pratosPorRestaurante[restauranteId] || []

  if (!restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => {
            const imagemPrato = require(
              `../../assets/images/restaurantes/${restaurante.slug}/pratos/prato_${prato.id}.png`
            )
            return (
              <PratoCard
                key={prato.id}
                nome={prato.nome}
                descricao={prato.descricao}
                imagem={imagemPrato}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default PratosList
