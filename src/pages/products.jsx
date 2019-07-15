import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Row,
  Col,
  Typography,
  Pagination
} from 'antd'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'
// import { getUniqueProducts } from '../utils/productHelper'

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
  const categoriesList = {
    product: 'all'
  }

  useEffect(() => {
    const { search } = location
    console.log(search)
    // const getParam = /(\d+)(?!.*\d)/
    // const currentPage = search !== '' ? Number(search.match(getParam)[0]) : 1
    // console.log(currentPage)

    const fetchProductItems = async () => getAllProductItems()

    fetchProductItems()

    return () => {
      const fetchProductItems = async () => getAllProductItems()

      fetchProductItems()
    }
  }, [])

  return (
    <Theme bg={'#eee'} x={console.log(productItems)}>
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
                {categoriesList.product.toUpperCase()} PRODUCT <span>({productItems.length})</span>
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
  getAllProductItems: () => getAllProductItems()
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
