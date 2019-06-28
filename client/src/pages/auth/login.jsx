import React, { useEffect } from 'react'
import { Card, Row, Col, Layout, Typography } from 'antd'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

import Theme from '../../layouts/Theme'
import Container from '../../layouts/Container'
import components from '../../components/'

const { Title } = Typography

const {
  Content
} = Layout

const {
  ExtraBar,
  LoginForm,
  RegisterForm
} = components

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const CardContainer = styled(Card)`
  min-height: 500px !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
`

const AuthLogin = ({ customer }) => {
  useEffect(() => {
    const isAuth = customer && customer.token

    if (isAuth && window.location.pathname === '/auth/login') {
      navigate(`/account/dashboard`)
    }
  })

  return (
    <Theme bg={'#fafafa'}>
      <ExtraBar />
      <Container>
        <LayoutContainer>
          <Content>
            <Row gutter={25}>
              <Col xs={24} lg={8} offset={4}>
                <CardContainer>
                  <Title level={3}>
                    <b>Login</b>
                  </Title>
                  <Location>
                    {({ location }) => {
                      return <LoginForm location={location.pathname} />
                    }}
                  </Location>
                  <small>We promise not to post or share anything on your behalf.</small>
                </CardContainer>
              </Col>
              <Col xs={24} lg={8}>
                <CardContainer>
                  <Title level={3}>
                    <b>Register</b>
                  </Title>
                  <RegisterForm />
                </CardContainer>
              </Col>
            </Row>
          </Content>
        </LayoutContainer>
      </Container>
    </Theme>
  )
}

AuthLogin.propTypes = {
  customer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  users: { customer }
}) => ({ customer })

export default connect(mapStateToProps)(AuthLogin)
