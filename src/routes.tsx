import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Restaurante from './pages/Restaurant'
import SidebarController from './containers/SidebarController'

// OBSERVAÇÃO IMPORTANTE:
// Este projeto utilizava anteriormente um componente <ScrollToTop /> para forçar o scroll ao topo ao trocar de rota.
// No entanto, o React Router (v6+ e v7) já executa esse comportamento por padrão.
// Como as páginas estão sendo carregadas corretamente no topo, o uso de <ScrollToTop /> foi removido.
//
// Caso, no futuro, surjam situações em que o scroll não se reposiciona automaticamente,
// considere reativar o componente ou investigar o uso de HashLink, navegação imperativa ou efeitos que alterem o scroll.

//import ScrollToTop from './components/ScrollToTop'

import { store } from './store'
import Overlay from './components/Overlay'
import GlobalStyle from './styles/GlobalStyle'
import HomeController from './containers/HomeController'

const AppRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      {/*<ScrollToTop />*/}
      <Routes>
        {/* Rota da Home */}
        <Route path="/" element={<HomeController />} />

        {/* Rota do Restaurante */}
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>

      {/* Overlay global controlado por Redux */}
      <Overlay />

      {/* Sidebar (Cart, Checkout...) */}
      <SidebarController />
    </BrowserRouter>
  </Provider>
)

export default AppRoutes
