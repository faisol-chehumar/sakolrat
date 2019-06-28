import React from 'react'
import {
  Layout
} from 'antd'
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores'

const {
  Content
} = Layout

const {
  coverHeader
} = stores

const {
  ExtraBar,
  HeaderCover,
  ForgotPasswordForm
} = components

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const ForgotPassword = () => (
  <Theme bg={'#eee'}>
    <HeaderCover data={coverHeader.customerService} />
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <Content>
          <ForgotPasswordForm />
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

export default ForgotPassword
