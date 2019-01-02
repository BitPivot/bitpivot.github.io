import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100vh;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    background: #111;
    color: #aaa;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.5rem;
    height: 100vh;
    margin: 0;
  }

  a {
    color: #999;
    text-decoration: underline;
  }
`

export const Theme = {}
