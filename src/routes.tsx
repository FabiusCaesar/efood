import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

// OBSERVAÇÃO IMPORTANTE:
// Este projeto utilizava anteriormente um componente <ScrollToTop /> para forçar o scroll ao topo ao trocar de rota.
// No entanto, o React Router (v6+ e v7) já executa esse comportamento por padrão.
// Como as páginas estão sendo carregadas corretamente no topo, o uso de <ScrollToTop /> foi removido.
//
// Caso, no futuro, surjam situações em que o scroll não se reposiciona automaticamente,
// considere reativar o componente ou investigar o uso de HashLink, navegação imperativa ou efeitos que alterem o scroll.

//import ScrollToTop from './components/ScrollToTop'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

const AppRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      {/*<ScrollToTop />*/}
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
