/* eslint-disable */
import React, { useState, useEffect } from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import { Row, Col, Select, Typography, Button } from 'antd'
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'
import instance from '../utils/request'

const { Title, Paragraph } = Typography
const { Rating } = components

const Option = Select.Option;

const ThumbImg = styled.div`
  padding: 2rem;
`

const HeaderText = styled(Title)`
  font-weight: 800;
  text-transform: uppercase;
`

const MetaData = styled.div`
  margin-bottom: 1rem;
`

const Price = styled.span`
  font-weight: 800;
  font-size: 1.8rem;
`

const ProductPageTemplate = (props) => {
  const data = props.data
  const product = get(data, 'allMoltinProduct.edges[0].node')
  const {
    id,
    name,
    sku,
    mainImageHref,
    description,
    meta: { display_price: { with_tax: { amount } }  }
  } = product

  const [brand, setBrand] = useState('')

  useEffect(() => {
    const getBrand = async (id) => {
      const productBrand = await instance.get(`/products/${id}?include=brands`)
      setBrand(productBrand)
    }

    getBrand(id)
  }, [])

  console.log(props.pageContext.brands)

  return (
    <Theme>
      <Container>
        <Row>
          <Col xs={24} lg={12}>
            <ThumbImg>
              <img src={mainImageHref} alt={name} width="100%" />
            </ThumbImg>
          </Col>
          <Col xs={24} lg={12}>
            <HeaderText level={2}>
              {name}
            </HeaderText>
            <MetaData>
              <div>
                Item: XXX | SKU: {sku}
              </div>
              <div>
                <Rating className="inline" score={4} />
                <div className="inline">
                  | 216 Q&As | Write a Review
                </div>
              </div>
            </MetaData>
            <Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {description}
            </Paragraph>
            <Price>฿ {amount}</Price>
            <div>
              <p><b>In Stock</b>Ships within 24 hours</p>
              <div>
                <Select defaultValue="1" style={{ width: 120 }}>
                  {
                    Array(10).fill('').map((_, index) => (
                      <Option key={index} value={index + 1}>{index + 1}</Option>
                    ))
                  }
                </Select>
                <Button>Add To Cart</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Theme>
  )
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
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          mainImageHref
          mainImage {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          slug
          sku
          categories {
            id
            name
          }
        }
      }
    }
  }
`
