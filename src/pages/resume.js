import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import H1 from '../components/H1'
import BaseH2 from '../components/H2'

const H2 = styled(BaseH2) `
  margin-top: 4rem;
  color: ${ props => props.theme.colors.text };
`

const ResumePage = () => (
  <Layout>
    <SEO title="Résumé" />

    <H1>Luca Ramundo</H1>

    <p>
      I'm an experienced frontend developer with more than ten years of full
      stack projects behind me as a freelance.
    </p>
    <p>
      I worked with lots of different languages and frameworks, but I fall in
      love with React ecosystem since late 2015. I am familiar with
      Javascript/ES6, React, Redux and related technologies.
    </p>
    <p>
      Keen to functional programming, my code is clean, understandable,
      maintainable and robust.
    </p>
    <p>
      I'm eager to constantly improve my skills using all learning platforms
      available. <br />
      Currently I am interested in deepen my Javascript knowledge, getting into
      Typescript and studying functional programming languages like Elm for the
      frontend and Elixir for the backend.
    </p>

    <H2>Latest projects</H2>

  </Layout>
)

export default ResumePage
