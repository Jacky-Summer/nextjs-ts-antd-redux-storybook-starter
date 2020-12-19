import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalBaseStyle = createGlobalStyle`
  ${normalize};

  body, #__next {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }
`

export default GlobalBaseStyle
