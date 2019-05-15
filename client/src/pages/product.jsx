import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Typography,
  Select,
  Pagination
} from 'antd'
import { connect } from 'react-redux'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import { getUniqueProducts } from '../utils/moltinHelper'

const { Title } = Typography
const Option = Select.Option

const {
  ExtraBar,
  BreadcrumbShop,
  ProductCard
} = components

const mapStateToProps = ({ products }) => ({ products })
const mapDispatchToProps = dispatch => {
  return { setProducts: (products) => dispatch({ type: `SET_PRODUCTS`, payload: products }) }
}

const Product = (props) => {
  // const [products, setProducts] = useState([])
  const { products, setProducts } = props
  const [category, setCategory] = useState('all')
  const [curBreadcum, setCurBreadcum] = useState([
    {
      title: 'HOME',
      link: '/'
    },
    {
      title: 'SHOP',
      link: ''
    }
  ])

  const data = useStaticQuery(graphql`
    query ProductsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            name
            slug
            mainImageHref
            meta {
              display_price {
                without_tax {
                  formatted
                }
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const allProducts = data['allMoltinProduct']['edges'].map(product => product.node)
    const uniqueProducts = getUniqueProducts(allProducts, 'name')
    setProducts(uniqueProducts)
  }, [])

  return (
    <Theme bg={'#eee'}>
      <ExtraBar />
      <Container>
        <Row>
          <Col xs={24} lg={8}>
            Filter
          </Col>
          <Col xs={24} lg={16}>
            <BreadcrumbShop data={curBreadcum} />
            <Title level={2}>
              {category.toUpperCase()} PRODUCT <span>(7631)</span>
            </Title>
            <Row>
              <Col xs={2}>
                <p>Sort By:</p>
              </Col>
              <Col xs={4}>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="Featured">Featured</Option>
                  <Option value="Rating">Rating</Option>
                  <Option value="Brand">Brand</Option>
                  <Option value="Best Sellers">Best Sellers</Option>
                  <Option value="Newest Arrivals">Newest Arrivals</Option>
                  <Option value="Price: Low to High">Price: Low to High</Option>
                  <Option value="Price: High to Low">Price: High to Low</Option>
                </Select>
              </Col>
              <Col xs={10} offset={8}>
                <Pagination defaultCurrent={1} total={50} />
              </Col>
            </Row>
            <Row>
              {
                products.map((product, index) => (
                  <Col key={index} xs={12} lg={6}>
                    <ProductCard data={product} />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </Theme>
  )
}

Product.propTypes = {
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  setProducts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
