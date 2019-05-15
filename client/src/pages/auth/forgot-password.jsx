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
} = Layout

const { Title } = Typography

const {
  coverHeader,
} = stores

const {
  ExtraBar,
  HeaderCover,
  ForgotPassword
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
        <Content>
          <ForgotPassword />
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default ForgetPassword
