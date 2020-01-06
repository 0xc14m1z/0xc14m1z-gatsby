import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import H1 from '../components/H1'
import BaseH2 from '../components/H2'
import P from '../components/P'
import ProjectsList from '../components/ProjectsList'

import useProjects from '../hooks/useProjects'

const H2 = styled(BaseH2) `
  margin-top: 4rem;
  margin-bottom: 2rem;
  color: ${ props => props.theme.colors.text };
`

const ResumePage = () => {
  const projects = useProjects()

  return (
    <Layout>
      <SEO title="Résumé" />

      <H1>Luca Ramundo</H1>

      <P>
        I'm an experienced frontend developer with more than ten years of full
        stack projects behind me as a freelance.
      </P>
      <P>
        I worked with lots of different languages and frameworks, but I fall in
        love with React ecosystem since late 2015. I am familiar with
        Javascript/ES6, React, Redux and related technologies.
      </P>
      <P>
        Keen to functional programming, my code is clean, understandable,
        maintainable and robust.
      </P>
      <P>
        I'm eager to constantly improve my skills using all learning platforms
        available. <br />
        Currently I am interested in deepen my Javascript knowledge, getting into
        Typescript and studying functional programming languages like Elm for the
        frontend and Elixir for the backend.
      </P>

      <H2>Latest projects</H2>

      <ProjectsList projects={ projects } />

    </Layout>
  )
}

export default ResumePage
