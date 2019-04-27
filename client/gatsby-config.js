module.exports = {
  siteMetadata: {
    title: 'My site'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: 'css'
      }
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/src/routes.js`
      }
    }
  ]
}
