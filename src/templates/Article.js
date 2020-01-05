import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import H1 from '../components/H1'
import Tags from '../components/Tags'
import WorkInProgress from '../components/WorkInProgress'

const Container = styled.article ``
const Header = styled.header `
  margin-bottom: 2rem;
`

export const query = graphql `
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        excerpt
        slug
        tags
        isWorkInProgress
      }
      body
    }
  }
`

const Article = ({ data: { mdx: article } }) => {
  const { title, excerpt, tags, isWorkInProgress } = article.frontmatter
  const { body: content } = article

  return (
    <Layout>
      <SEO title={ title } description={ excerpt } />
      <Container>
        <Header>
          { isWorkInProgress && <WorkInProgress /> }
          <H1>{ title }</H1>
          <Tags tags={ tags } />
        </Header>
        <MDXRenderer>{ content }</MDXRenderer>
      </Container>
    </Layout>
  )
}

export default Article
