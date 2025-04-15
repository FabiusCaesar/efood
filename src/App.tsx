import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
