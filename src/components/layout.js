/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyle from './GlobalStyle'
import Theme from './Theme'

import Header from './Header'
import Footer from './Footer'

const Container = styled.div `
  max-width: ${ props => props.theme.viewport.maxWidth };
  margin: auto;
`

const Main = styled.main `
  padding: 0 1.5em;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Header title={ data.site.siteMetadata.title } />
        <Main>{ children }</Main>
        <Footer />
      </Container>
    </Theme>
  )
}

Layout.propTypes = {
  children: t.node.isRequired
}

export default Layout
