import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from '../Button'

const ProceedCheckOutButton = ({ cartItem }) => (
  cartItem.length > 0 && <Link to="/checkout">
    <Button
      type="primary"
      text="Proceed To Checkout"
    />
  </Link>
)

ProceedCheckOutButton.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  carts: { cartItem }
}) => ({ cartItem })

export default connect(mapStateToProps)(ProceedCheckOutButton)
