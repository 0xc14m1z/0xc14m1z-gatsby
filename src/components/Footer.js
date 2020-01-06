import React from 'react'
import styled from 'styled-components'

import BaseLink from './Link'
import Icon from './Icon'

const Container = styled.footer `
  margin-top: 4rem;
  margin-bottom: 1rem;
  border-top: 1px solid ${ props => props.theme.colors.border };
  padding: 4rem 1.5rem 0 1.5rem;
  display: flex;
  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.sm }) {
    flex-direction: column;
  }
`

const Text = styled.p `
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${ props => props.theme.colors.lightText };
  flex-grow: 1;
  text-align: right;
  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.sm }) {
    text-align: left;
  }
`

const Link = styled(BaseLink) `
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  [data-icon] {
    margin-right: 0.4rem;
  }
`

const Footer = () => (
  <Container>
    <Link to="/">
      <Icon.Home />Home
    </Link>
    <Link to="/resume">
      <Icon.Info />Résumé
    </Link>
    <Link to="https://github.com/0xc14m1z">
      <Icon.GitHub />GitHub
    </Link>
    <Text>© { new Date().getFullYear() }. All rights reserved.</Text>
  </Container>
)

export default Footer
