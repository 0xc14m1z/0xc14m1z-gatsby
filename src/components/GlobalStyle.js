import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.font.size};
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: url('fonts/jetbrains-mono/eot/JetBrainsMono-Regular.eot');
    src: url('fonts/jetbrains-mono/eot/JetBrainsMono-Regular.eot?#iefix') format('embedded-opentype'),
         url('fonts/jetbrains-mono/woff/JetBrainsMono-Regular.woff') format('woff'),
         url('fonts/jetbrains-mono/ttf/JetBrainsMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
   }
`

export default GlobalStyle
