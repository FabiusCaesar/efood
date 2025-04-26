import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

import ScrollToTop from './components/ScrollToTop'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

const AppRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Rota da Home */}
        <Route path="/" element={<Home />} />

        {/* Rota do Restaurante */}
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  </Provider>
)

export default AppRoutes
