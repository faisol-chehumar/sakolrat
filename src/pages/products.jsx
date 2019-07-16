import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import queryString from 'query-string'
import {
  Row,
  Col,
  Typography,
  Pagination
} from 'antd'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'

const { Title } = Typography

const {
  BreadcrumbShop,
  ExtraBar,
  FilterProduct,
  ProductCard,
  SidebarFilter
} = components

const ContentContainer = styled.div`

`

const Product = ({ productItems, getAllProductItems, location }) => {
  const [currentQuery, setCurrentQuery] = useState({})

  useEffect(() => {
    const { search } = location
    const queryParam = search && Object.keys(queryString.parse(search))

    if (queryParam.includes('q')) {
      const query = search ? queryString.parse(search) : {}

      setCurrentQuery(query)
      getAllProductItems({ query })
    }

    if (queryParam.includes('category')) {
      const category = search ? queryString.parse(search) : {}

      getAllProductItems({ category })
    }

    return () => {
      if (queryParam.includes('q')) {
        const query = search ? queryString.parse(search) : {}

        setCurrentQuery(query)
        getAllProductItems({ query })
      }

      if (queryParam.includes('category')) {
        const category = search ? queryString.parse(search) : {}

        getAllProductItems({ category })
      }
    }
  }, [])

  return (
    <Theme bg={'#eee'} x={console.log(currentQuery)}>
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
                {
                  currentQuery.length > 0
                    ? `ALL ${currentQuery.toUpperCase()} PRODUCTS`
                    : 'ALL PRODUCTS'
                }
                <span>({productItems.length})</span>
              </Title>
              <Row>
                <Col xs={2}>
                  <p>Sort By:</p>
                </Col>
                <Col xs={4}>
                  <FilterProduct style={{ width: '200px' }} />
                </Col>
                <Col className="right" xs={10} offset={8}>
                  <Pagination defaultCurrent={1} total={Math.ceil(productItems.length / 50)} />
                </Col>
              </Row>
              <Row>
                {
                  productItems.map((product, index) => (
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
  productItems: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  getAllProductItems: PropTypes.func,
  sortBy: PropTypes.array,
  currentCategory: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  location: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  products: { productItems },
  currentCategory
}) => ({ productItems, currentCategory })

const mapDispatchToProps = ({
  products: { getAllProductItems }
}) => ({
  getAllProductItems: (payload) => getAllProductItems(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
