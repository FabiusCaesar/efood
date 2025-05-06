import Footer from '../../components/Footer'
import Header from '../../components/Header'

import RestaurantsList from '../../components/RestaurantsList'
import { Restaurant } from '../../models/Restaurant'
import Loader from '../../components/Loader'

type Props = {
  restaurants: Restaurant[]
  isLoading: boolean
}

const Home = ({ isLoading, restaurants }: Props) => {
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
