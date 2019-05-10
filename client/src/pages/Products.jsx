import React from 'react'
import { Layout } from 'antd'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'

const {
  Header, Content, Footer, Sider
} = Layout

const { ExtraBar } = components

const { ProductList } = components

const ProductDetail = () => (
  <Theme>
    <ExtraBar />
    <Container size="xs">
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <ProductList />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Container>
  </Theme>
)

export default ProductDetail
