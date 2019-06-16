import React from 'react'
import { Layout, Typography, Col } from 'antd'
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'

const {
  Header,
  Content
} = Layout

const { Title } = Typography

const {
  ExtraBar,
  MenuLink,
  InternalLink
} = components

const HeaderContainer = styled(Header)`
  background: transparent !important;
  padding-left: 0 !important;
  height: auto !important;

  h2 {
    display: inline-block;
  }
`

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const Cart = () => (
  <Theme bg={'#eee'}>
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <Title level={2}>
            My Account
          </Title>
          <InternalLink
            linkText="View Wish List"
            linkTo="/whish-list"
            marginLeft={'20px'}
          />
        </HeaderContainer>
        <Content>
          hello
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default Cart
