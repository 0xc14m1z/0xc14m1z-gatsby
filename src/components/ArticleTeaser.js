import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import BaseH2 from './H2'
import Link from './Link'
import Tags from './Tags'
import WorkInProgress from './WorkInProgress'

import articlePath from '../helpers/articlePath'

const Container = styled.article `
  margin: 0;
  &:not(:last-child):after {
    display: block;
    margin: 1.5rem 0;
    content: "•";
    color: ${ props => props.theme.colors.border };
    text-align: center;
  }
`

const H2 = styled(BaseH2) `
  margin: 1rem 0 0.25rem 0;
`

const Excerpt = styled.p `
  margin: 0 0 1rem 0;
  color: ${ props => props.theme.colors.text };
  font-size: 1.2rem;
`

const ArticleTeaser = ({ isWorkInProgress, slug, title, excerpt, tags }) => (
  <Container>
    { isWorkInProgress && <WorkInProgress /> }
    <H2><Link to={ articlePath(slug) }>{ title }</Link></H2>
    <Excerpt>{ excerpt }</Excerpt>
    <Tags tags={ tags } />
  </Container>
)

ArticleTeaser.propTypes = {
  isWorkInProgress: t.bool.isRequired,
  slug: t.string.isRequired,
  title: t.string.isRequired,
  excerpt: t.string.isRequired,
  tags: t.arrayOf(String).isRequired
}

export default ArticleTeaser
