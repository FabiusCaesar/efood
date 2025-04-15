import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export default GlobalStyle
