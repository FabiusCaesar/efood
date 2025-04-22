import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import PratosList from '../../components/PratosList'

import { RestauranteModel } from '../../models/RestauranteModel'

const Restaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteModel | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h2>Carregando restaurante...</h2>
  }

  return (
    <>
      <Header type="restaurante" />
      <Banner
        imagem={restaurante.capa}
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <PratosList pratos={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Restaurante
