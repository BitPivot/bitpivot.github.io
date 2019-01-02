import React from 'react'
import { node } from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../components/GlobalStyle'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
