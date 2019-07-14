import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Typography, Row, Col, Icon } from 'antd'
import styled from 'styled-components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'

const { Title } = Typography

const {
  ExtraBar,
  CheckoutStep
} = components

const RowContainer = styled(Row)`
  margin-top: 1.5rem;
`

const Checkout = ({ cartItem }) => {
  useEffect(() => {
    if (cartItem.length === 0 && window.location.pathname === '/checkout') {
      navigate(`/cart`)
    }
  })

  return (
    <Theme bg={'#fafafa'}>
      <ExtraBar />
      <Container>
        <Title level={3}>
          <Icon type="lock" /><b> CHECKOUT</b>
        </Title>
        <RowContainer>
          <Col xs={24} lg={16}>
            <CheckoutStep />
          </Col>
        </RowContainer>
      </Container>
    </Theme>
  )
}

Checkout.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  carts: { cartItem }
}) => ({ cartItem })

export default connect(mapStateToProps)(Checkout)
