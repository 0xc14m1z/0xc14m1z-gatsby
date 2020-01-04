import React from 'react'
import t from 'prop-types'
import Helmet from 'react-helmet'

import useMetadata from '../hooks/useMetadata'

const SEO = ({ description, lang, meta, title }) => {
  const metaData = useMetadata()
  const metaDescription = description || metaData.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${metaData.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: metaData.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

SEO.propTypes = {
  description: t.string,
  lang: t.string,
  meta: t.arrayOf(t.object),
  title: t.string.isRequired
}

export default SEO
