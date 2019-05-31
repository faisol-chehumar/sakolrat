import React, { useEffect } from 'react'
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
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import { getUniqueProducts } from '../utils/productHelper'

const { Title } = Typography
const Option = Select.Option

const {
  ExtraBar,
  BreadcrumbShop,
  ProductCard,
  SidebarFilter
} = components

const mapStateToProps = ({
  products,
  sortBy,
  currentCategory
}) => ({ products, sortBy, currentCategory })

const mapDispatchToProps = dispatch => {
  return { setProducts: (products) => dispatch({ type: `SET_PRODUCTS`, payload: products }) }
}

const ContentContainer = styled.div`

`

const Product = (props) => {
  const { products, setProducts, sortBy } = props
  const categoriesList = {
    product: 'all'
  }

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
          <Col xs={24} lg={6}>
            <SidebarFilter />
          </Col>
          <Col xs={24} lg={18}>
            <ContentContainer>
              <BreadcrumbShop />
              <Title level={2}>
                {categoriesList.product.toUpperCase()} PRODUCT <span>(7631)</span>
              </Title>
              <Row>
                <Col xs={2}>
                  <p>Sort By:</p>
                </Col>
                <Col xs={4}>
                  <Select defaultValue="Featured" style={{ width: 200 }}>
                    {sortBy.map((sort, index) => (
                      <Option key={index} value={sort}>{sort}</Option>
                    ))}
                  </Select>
                </Col>
                <Col className="right" xs={10} offset={8}>
                  <Pagination defaultCurrent={1} total={Math.ceil(products.length / 50)} />
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
            </ContentContainer>
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
  setProducts: PropTypes.func,
  sortBy: PropTypes.array,
  currentCategory: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
