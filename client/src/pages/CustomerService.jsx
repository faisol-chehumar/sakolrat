import React from 'react'
import { Layout, Typography } from 'antd'
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores'

const {
  Header
  // Content,
  // Footer
} = Layout

const { Title } = Typography

const {
  coverHeader,
  menuLink
} = stores

const {
  ExtraBar,
  HeaderCover,
  MenuLink
} = components

const HeaderContainer = styled(Header)`
  background: transparent !important;
`

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const CustomerService = () => (
  <Theme bg={'#eee'}>
    <HeaderCover data={coverHeader.customerService} />
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <Title level={2}>
            Customer Services
          </Title>
          <MenuLink data={menuLink.customerService} />
        </HeaderContainer>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default CustomerService
