import React from 'react'
import { Layout, Typography, Divider, Row, Col } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'

const {
  Header,
  Content
} = Layout

const { Title } = Typography

const {
  OrderItems,
  EmptyOrder,
  ExtraBar,
  InternalLink,
  ProceedCheckOutButton
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

const OrderItemsContainer = styled.div`
  margin-bottom: 4rem;
`
const Order = ({ totalItems }) => (
  <Theme bg={'#fafafa'}>
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <Row>
            <Col xs={18}>
              <Title level={2}>
                My Account
              </Title>
              <InternalLink
                linkText="View Wish List"
                linkTo="/whish-list"
                marginLeft={'20px'}
              />
            </Col>
            <Col xs={6}>
              <ProceedCheckOutButton />
            </Col>
          </Row>
        </HeaderContainer>
        <Divider />
        <Content>
          <OrderItemsContainer>{
            totalItems > 0
              ? <OrderItems />
              : <EmptyOrder />
          }</OrderItemsContainer>
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

Order.propTypes = {
  totalItems: PropTypes.number
}

const mapStateToProps = ({
  carts: { totalItems }
}) => ({ totalItems })

export default connect(mapStateToProps)(Order)
