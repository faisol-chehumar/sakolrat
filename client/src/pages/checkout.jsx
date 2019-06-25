import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'

const { Title } = Typography

const {
  ExtraBar
} = components

const Checkout = ({ cartItem }) => {
  useEffect(() => {
    if (cartItem && window.location.pathname === '/checkout') {
      navigate(`/cart`)
    }
  })

  return (
    <Theme bg={'#fafafa'}>
      <ExtraBar />
      <Container>
        <Title level={3}>
          <b>Login</b>
        </Title>
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
