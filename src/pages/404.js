import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Icon from '../components/Icon'
import Message from '../components/Message'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Message icon={ <Icon.NotFound /> }>
      Oh no! The page you were looking for was not found...
    </Message>
  </Layout>
)

export default NotFoundPage
