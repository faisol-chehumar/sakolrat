import React from 'react'
import { Layout, Typography, Row, Col, Card } from 'antd'
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
  MenuLink
} = components

const { UserBox } = AccountDashboard

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

const GrayCard = styled(Card)`
  background-color: #fafafa;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
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
          <Row>
            <Col xs={24}>
              <GrayCard>
                <UserBox />
              </GrayCard>
            </Col>
          </Row>
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default Dashboard
