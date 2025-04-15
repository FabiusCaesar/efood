import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantesPage from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<RestaurantesPage />} />
  </Routes>
)

export default Rotas
