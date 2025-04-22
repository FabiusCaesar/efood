import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'
import restaurantes from '../../data/restaurantes'

const Home = () => (
  <>
    <Header type="home" />
    <RestaurantesList restaurantes={restaurantes} />
    <Footer />
  </>
)

export default Home
