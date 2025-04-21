import { useParams } from 'react-router-dom'

import restaurantes from '../../data/restaurantes'
import PratosList from '../../components/PratosList'
import Banner from '../../components/Banner'

const Restaurante = () => {
  const { id } = useParams()
  const restauranteId = Number(id)

  const restaurante = restaurantes.find((r) => r.id === restauranteId)

  if (!restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  const imagemBanner = require(
    `../../assets/images/restaurantes/${restaurante.slug}/imagem_banner.png`
  )

  return (
    <>
      <Banner
        imagem={imagemBanner}
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <PratosList />
    </>
  )
}

export default Restaurante
