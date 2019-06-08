import React from 'react'
import { Layout, Typography } from 'antd'
import styled from 'styled-components'

import Theme from '../../layouts/Theme'
import Container from '../../layouts/Container'
import components from '../../components'
import stores from '../../stores'

const {
  Header,
  Content
} = Layout

const { Title } = Typography

const {
  menuLink
} = stores

const {
  ExtraBar,
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

const AccountDashboard = () => (
  <Theme bg={'#eee'}>
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <div>
            <Title level={2}>
              My Account
            </Title>
            <MenuLink data={menuLink.AccountDashboard} />
          </div>
        </HeaderContainer>
        <Content>
          Hello
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default AccountDashboard
