/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
// import ProductSummary from '../components/ProductSummary'
// import ProductAttributes from '../components/ProductAttributes'
// import Layout from '../Layout'
class ProductPageTemplate extends React.PureComponent {

  render() {
    const productInfo = get(this, 'props.data.allMoltinProduct')
    const data = productInfo.edges[0].node
    const slug = data.slug
    const image = get(data, 'mainImageHref')
    const sizes = null
    const product = {
      ...data,
      id: data.id,
      image,
      mainImage: data.mainImage,
      header: data.name,
      meta: data.meta,
      sku: data.sku,
    }


    return (
      <>
        {/* <SEO title={slug} /> */}
        {/* <ProductSummary {...product} /> */}
        {/* <ProductAttributes {...product} /> */}
        Hello
      </>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMoltinProduct(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          description
          slug
          sku
        }
      }
    }
  }
`
