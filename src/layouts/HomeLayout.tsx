import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'

const HomeLayout = () => (
  <>
    <HeaderHome />
    <Outlet />
    <Footer />
  </>
)

export default HomeLayout
