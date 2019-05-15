import React from 'react'
import { Layout, Typography } from 'antd'
import styled from 'styled-components'

import Theme from '../../layouts/Theme'
import Container from '../../layouts/Container'
import components from '../../components/'
import stores from '../../stores'

const {
  Header,
  Content
  // Footer
} = Layout

const { Title } = Typography

const {
  announce,
  coverHeader,
  menuLink
} = stores

const {
  AnnounceBox,
  ExtraBar,
  HeaderCover,
  MenuLink
} = components

const HeaderContainer = styled(Header)`
  background: transparent !important;
  padding-left: 0 !important;
  height: auto !important;
`

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const ForgetPassword = () => (
  <Theme bg={'#eee'}>
    <HeaderCover data={coverHeader.customerService} />
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <div>
            <Title level={2}>
              Customer Services
            </Title>
            <MenuLink data={menuLink.customerService} />
          </div>
        </HeaderContainer>
        <Content>
          <AnnounceBox data={announce[0]} />
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default ForgetPassword
