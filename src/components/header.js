import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import Link from './Link'
import Icon from './Icon'

const Container = styled.header `
  z-index: 1;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;

  margin-bottom: 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 1.5em;
  box-sizing: border-box;

  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: white;
`

const Title = styled.span `
  color: ${props => props.theme.colors.text};
  font-size: 1em;
  font-weight: bold;
`

const Home = () => (
  <Link to="/" title="Home">
    <Icon.Home />
  </Link>
)

const Resume = () => (
  <Link to="/resume" title="Résumé">
    <Icon.Info />
  </Link>
)

const Header = ({ title }) => (
  <Container>
    <Home />
    <Title>{ title }</Title>
    <Resume />
  </Container>
)

Header.propTypes = {
  title: t.string.isRequired
}

Header.defaultProps = {
  title: ''
}

export default Header
