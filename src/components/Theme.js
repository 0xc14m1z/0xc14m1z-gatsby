import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    // primary: '#651fff',
    primary: '#7C4DFF',
    text: '#444444',
    lightText: '#888888',
    border: '#DDDDDD',
    background: '#EEEEEE',
    workInProgress: '#FFEB3B'
  },
  font: {
    size: '16px'
  },
  viewport: {
    maxWidth: '768px',
    breakpoints: {
      sm: '640px',
      xs: '320px'
    }
  }
}

const Theme = props => <ThemeProvider theme={ theme } {...props} />

export default Theme
