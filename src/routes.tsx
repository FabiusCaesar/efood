import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SidebarController from './containers/SidebarController'

import { store } from './store'
import GlobalStyle from './styles/GlobalStyle'
import HomeController from './containers/HomeController'
import RestaurantController from './containers/RestaurantController'
import OverlayController from './containers/OverlayController'

const AppRoutes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* Rota da Home */}
        <Route path="/" element={<HomeController />} />

        {/* Rota do Restaurante */}
        <Route path="/restaurante/:id" element={<RestaurantController />} />
      </Routes>

      {/* Overlay global controlado por Redux */}
      <OverlayController />

      {/* Sidebar (Cart, Checkout...) */}
      <SidebarController />
    </BrowserRouter>
  </Provider>
)

export default AppRoutes
