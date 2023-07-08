import { createGlobalStyle } from 'styled-components'
import { color } from './constants'

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    background-color: ${color.body};
  }

  html {
    font-size: 16px;
  }
`
