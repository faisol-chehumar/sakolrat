import React from 'react'
import { Layout, Typography, Col } from 'antd'
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
  AccountDashboard,
  ExtraBar,
  LogoutLink,
  MenuLink,
  RowBlock
} = components

const { UserBox, RecentOrder } = AccountDashboard

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

const Dashboard = () => (
  <Theme bg={'#eee'}>
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <Title level={2}>
            My Account
          </Title>
          <LogoutLink />
          <MenuLink data={menuLink.AccountDashboard} />
        </HeaderContainer>
        <Content>
          <RowBlock>
            <Col xs={24}>
              <UserBox />
            </Col>
          </RowBlock>
          <RowBlock>
            <Col xs={24}>
              <RecentOrder />
            </Col>
          </RowBlock>
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default Dashboard
