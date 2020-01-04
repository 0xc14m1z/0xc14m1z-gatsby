import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ArticlesList from '../components/ArticlesList'

import useArticles from '../hooks/useArticles'

const IndexPage = () => {
  const articles = useArticles()

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ArticlesList articles={ articles } />
    </Layout>
  )
}

export default IndexPage
