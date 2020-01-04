import React from 'react'

import Message from './Message'
import Icon from './Icon'
import ArticleTeaser from './ArticleTeaser'

const EmptyList = () => (
  <Message icon={ <Icon.Empty /> }>
    No articles here.
  </Message>
)

const List = ({ articles }) =>
  articles.map(article =>
    <ArticleTeaser
      key={ article.slug }
      { ...article }
    />
  )

const ArticlesList = ({ articles }) =>
  articles.length === 0
    ? <EmptyList />
    : <List articles={ articles } />

export default ArticlesList
