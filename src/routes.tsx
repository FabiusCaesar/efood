import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

import ScrollToTop from './components/ScrollToTop'

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* Rota da Home */}
      <Route path="/" element={<Home />} />

      {/* Rota do Restaurante */}
      <Route path="/restaurante/:id" element={<Restaurante />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
