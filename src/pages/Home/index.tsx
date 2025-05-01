import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import RestaurantsList from '../../components/RestaurantsList'
import { Restaurant } from '../../models/Restaurant'
import Loader from '../../components/Loader'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Header type="home" />

      {isLoading ? (
        <Loader />
      ) : (
        <div id="restaurants-list">
          <RestaurantsList restaurants={restaurants} />
        </div>
      )}

      <Footer />
    </>
  )
}

export default Home
