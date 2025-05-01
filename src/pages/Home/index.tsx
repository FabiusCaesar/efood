import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import RestaurantsList from '../../components/RestaurantsList'
import { RestauranteModel } from '../../models/RestauranteModel'

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestauranteModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header type="home" />
      <div id="restaurants-list">
        <RestaurantsList restaurants={restaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
