const articlePath = require('./src/helpers/articlePath')

async function createPages({ actions, graphql, reporter }) {
  const response = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if ( response.error ) {
    reporter.panic('Something went wrong creating articles\' pages', response.error)
  }

  const articles = response.data.allMdx.nodes

  articles.forEach(article => {
    actions.createPage({
      path: articlePath(article.frontmatter.slug),
      component: require.resolve('./src/templates/Article.js'),
      context: {
        slug: article.frontmatter.slug
      }
    })
  })
}

module.exports = {
  createPages
}
