import { useStaticQuery, graphql } from 'gatsby'

const query = graphql `
  query {
    allProjectsJson {
      nodes {
        slug
        period
        role
        client {
          description
          name
        }
        status
        isPrivate
        description
        tags
      }
    }
  }
`

const useProjects = () => {
  const data = useStaticQuery(query)
  return data.allProjectsJson.nodes.reverse()
}

export default useProjects
