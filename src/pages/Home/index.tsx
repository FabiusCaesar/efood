import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'
import { RestauranteModel } from '../../models/RestauranteModel'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header type="home" />
      <RestaurantesList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
