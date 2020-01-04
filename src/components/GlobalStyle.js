import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.font.size};
  }
`

export default GlobalStyle
