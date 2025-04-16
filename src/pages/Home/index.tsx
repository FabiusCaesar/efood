import RestaurantesList from '../../components/RestaurantesList'
import restaurantes from '../../data/restaurantes'

const Home = () => (
  <>
    <RestaurantesList restaurantes={restaurantes} />
  </>
)

export default Home
