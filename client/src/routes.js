const path = require('path')
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/Home.jsx`)
  },
  {
    path: '/products',
    component: path.resolve(`src/pages/Products.jsx`)
  }
]
