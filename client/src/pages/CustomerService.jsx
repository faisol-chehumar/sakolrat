import React from 'react'
import { Layout } from 'antd'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores'

const {
  Header, Content, Footer, Sider
} = Layout

const { coverHeader } = stores
const { ExtraBar, HeaderCover } = components

const CustomerService = () => (
  <Theme>
    <HeaderCover data={coverHeader.customerService} />
    <ExtraBar />
    <Container>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            xxx
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Container>
  </Theme>
)

export default CustomerService
