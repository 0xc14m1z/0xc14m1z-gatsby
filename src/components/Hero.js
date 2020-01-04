import React from 'react'
import styled from 'styled-components'

import photo from '../images/photo.jpg'

import BaseH1 from './H1'
import BaseH2 from './H2'
import BaseLink from './Link'
import Icon from './Icon'

const Container = styled.div `
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    display: block;
    margin: 1.5em 0 4em 0;
    content: "•";
    color: ${ props => props.theme.colors.border };
    text-align: center;
  }
`

const Photo = styled.img `
  width: 72px;
  height: 72px;
  border-radius: 72px;
  margin-bottom: 1.5em;
`

const H1 = styled(BaseH1) `
  margin: 0;
  font-size: 1.25em;
`

const H2 = styled(BaseH2) `
  margin: 1em 0;
  max-width: 400px;
  font-size: 1em;
  font-weight: normal;
  color: black;
  text-align: center;
`

const Link = styled(BaseLink) `
  [data-icon] {
    margin-right: 0.4em;
  }
`

const Hero = () => (
  <Container>
    <Link to="/resume">
      <Photo src={ photo } alt="Luca Ramundo" />
    </Link>
    <H1>Luca Ramundo</H1>
    <H2>
      I'm an experienced Frontend Developer with more than ten years of full
      stack projects behind me as a freelance.
    </H2>
    <Link to="/resume">
      <Icon.Info />Résumé
    </Link>
  </Container>
)
export default Hero
