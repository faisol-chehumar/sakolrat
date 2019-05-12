module.exports = {
  siteMetadata: {
    title: 'Sakolrat'
  },
  plugins: [
    {
      resolve: '@moltin/gatsby-source-moltin',
      options: {
        client_id:
          process.env.MOLTIN_CLIENT_ID ||
          'zIHN2cq5oFlPhhCCdD9fDd8v6WimkNWtCmi6t8u08B'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    // `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: 'css'
      }
    }
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `xxx`
    //   }
    // }
  ]
}
