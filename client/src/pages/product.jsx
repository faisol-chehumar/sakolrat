import React, { useState, useEffect } from 'react'
import {
  Row,
  Col
} from 'antd'
import moltin from '../utils/request'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'

import components from '../components/'

const {
  ExtraBar,
  BreadcrumbShop
} = components

const Product = () => {
  const [products, setProducts] = useState('all')
  const [category, setCategory] = useState('')
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

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await moltin.get('/products')
      // console.log(products)
      setProducts(products)
    }

    getAllProducts()
  })

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
          </Col>
        </Row>
      </Container>
    </Theme>
  )
}

export default Product
