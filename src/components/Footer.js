import React from 'react'
import styled from 'styled-components'

import { Link as BaseLink } from 'gatsby'
import Icon from './Icon'

const Container = styled.footer `
  margin-top: 4em;
  border-top: 1px solid ${ props => props.theme.colors.border };
  padding: 4em 1.5em 0 1.5em;
  display: flex;
  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.sm }) {
    flex-direction: column;
  }
`

const Text = styled.p `
  margin-top: 0;
  font-size: 0.9em;
  color: ${ props => props.theme.colors.lightText };
  flex-grow: 1;
  text-align: right;
  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.sm }) {
    text-align: left;
  }
`

const Link = styled(BaseLink) `
  margin-right: 1.5em;
  margin-bottom: 1em;
  [data-icon] {
    margin-right: 0.4em;
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
