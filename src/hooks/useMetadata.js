import { useStaticQuery, graphql } from 'gatsby'

const query = graphql `
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const useMetadata = () => {
  const data = useStaticQuery(query)
  return { ...data.site.siteMetadata }
}

export default useMetadata
