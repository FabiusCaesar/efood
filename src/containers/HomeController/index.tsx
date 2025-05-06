import { useEffect, useState } from 'react'

import { Restaurant } from '../../models/Restaurant'
import Home from '../../pages/Home'

const HomeController = () => {
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

  return <Home restaurants={restaurants} isLoading={isLoading}></Home>
}

export default HomeController
