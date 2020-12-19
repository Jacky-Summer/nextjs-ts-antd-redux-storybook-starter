import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalBaseStyle = createGlobalStyle`
  ${normalize};

  body {
    min-height:100%;
    margin:0;
    padding:0;
    position:relative;
  }
`

export default GlobalBaseStyle
