import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout'
import RestauranteLayout from './layouts/RestauranteLayout'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import ScrollToTop from './components/ScrollToTop'

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* Rota da Home */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Rota do Restaurante */}
      <Route path="/restaurante/:id" element={<RestauranteLayout />}>
        <Route index element={<Restaurante />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
