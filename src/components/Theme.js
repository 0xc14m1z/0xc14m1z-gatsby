import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#930EDF',
    text: '#000000',
    lightText: '#888888',
    border: '#DDDDDD',
    background: '#EEEEEE',
    workInProgress: '#FFEB3B'
  },
  font: {
    size: '16px'
  }
}

const Theme = props => <ThemeProvider theme={ theme } {...props} />

export default Theme
