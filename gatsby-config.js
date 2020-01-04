module.exports = {
  siteMetadata: {
    title: '0xc14m1z notes',
    description:
      "I'm an experienced Frontend Developer with more than ten years of full stack projects behind me as a freelance.",
    author: 'Luca Ramundo'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`
      }
    },
    'gatsby-plugin-styled-components',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
