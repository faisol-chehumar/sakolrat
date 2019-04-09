module.exports = {
  siteMetadata: {
    title: 'My site'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: "antd",
        style: 'css',   // or 'css'
      }
    },
  ]
}
