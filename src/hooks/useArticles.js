import { useStaticQuery, graphql } from 'gatsby'

const query = graphql `
  query {
    allMdx(sort: {fields: frontmatter___position, order: DESC}) {
      nodes {
        frontmatter {
          title
          excerpt
          slug
          tags
          isWorkInProgress
        }
      }
    }
  }
`

const useArticles = () => {
  const data = useStaticQuery(query)
  return data.allMdx.nodes.map(article => ({
    title: article.frontmatter.title,
    excerpt: article.frontmatter.excerpt,
    slug: article.frontmatter.slug,
    tags: article.frontmatter.tags,
    isWorkInProgress: Boolean(article.frontmatter.isWorkInProgress)
  }))
}

export default useArticles
