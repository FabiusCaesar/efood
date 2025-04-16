import { useParams } from 'react-router-dom'
import PratoCard from '../../components/PratoCard'
import pratosPorRestaurante from '../../data/pratosPorRestaurante'
import restaurantes from '../../data/restaurantes'
import { Banner, Container, Nome, PratosList, Tipo } from './styles'

const Restaurante = () => {
  const { id } = useParams()
  const restauranteId = Number(id)

  const restaurante = restaurantes.find((r) => r.id === restauranteId)
  const pratos = pratosPorRestaurante[restauranteId] || []

  if (!restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  const imagemBanner = require(
    `../../assets/images/restaurantes/${restaurante.slug}/imagem_banner.png`
  )

  return (
    <>
      <Banner backgroundImage={imagemBanner}>
        <Tipo>{restaurante.tipo}</Tipo>
        <Nome>{restaurante.titulo}</Nome>
      </Banner>
      <Container>
        <div className="container">
          <PratosList>
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
          </PratosList>
        </div>
      </Container>
    </>
  )
}

export default Restaurante
