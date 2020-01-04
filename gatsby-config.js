module.exports = {
  siteMetadata: {
    title: '0xc14m1z notes',
    description:
      "I'm an experienced Frontend Developer with more than ten years of full stack projects behind me as a freelance.",
    author: 'Luca Ramundo'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/Layout.js`
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '0xc14m1z notes',
        short_name: '0xc14m1z',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#930EDF',
        display: 'minimal-ui',
        icon: 'src/images/photo.jpg'
      }
    }
  ]
}
