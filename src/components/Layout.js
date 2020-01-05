import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Theme from './Theme'
import MarkdownTheme from './MarkdownTheme'

import Header from './Header'
import Footer from './Footer'

import useMetadata from '../hooks/useMetadata'

const Container = styled.div `
  max-width: ${ props => props.theme.viewport.maxWidth };
  margin: auto;
`

const Main = styled.main `
  padding: 0 1.5em;
`

const Layout = ({ children }) => {
  const { title } = useMetadata()

  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Header title={ title } />
        <MarkdownTheme>
          <Main>
            { children }
          </Main>
        </MarkdownTheme>
        <Footer />
      </Container>
    </Theme>
  )
}

Layout.propTypes = {
  children: t.node.isRequired
}

export default Layout
