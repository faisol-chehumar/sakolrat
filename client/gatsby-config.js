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
    }
  ]
}
