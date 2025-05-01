import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import PratosList from '../../components/PratosList'
import { Restaurant } from '../../models/Restaurant'

const Restaurante = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
        setIsLoading(false)
      })
  }, [id])

  return (
    <>
      <Header type="restaurante" />

      {isLoading ? (
        <Loader />
      ) : (
        restaurant && (
          <>
            <Banner
              imagem={restaurant!.capa}
              tipo={restaurant!.tipo}
              nome={restaurant!.titulo}
            />
            <PratosList pratos={restaurant!.cardapio} />
          </>
        )
      )}
      <Footer />
    </>
  )
}

export default Restaurante
