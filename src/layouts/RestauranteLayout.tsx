import { Outlet } from 'react-router-dom'
import HeaderRestaurante from '../components/HeaderRestaurante'
import Footer from '../components/Footer'

const RestauranteLayout = () => (
  <>
    <HeaderRestaurante />
    <Outlet />
    <Footer />
  </>
)

export default RestauranteLayout
