import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import H1 from './H1'
import BaseH2 from './H2'

const H2 = styled(BaseH2) `
  margin-top: 3rem;
  color: ${ props => props.theme.colors.text }
`

const components = {
  h1: H1,
  h2: H2
}

const MarkdownTheme = ({ children }) => (
  <MDXProvider components={components}>
    { children }
  </MDXProvider>
)

export default MarkdownTheme
