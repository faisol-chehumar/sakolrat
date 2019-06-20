import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Badge } from 'antd'

import MenuIcon from '../MenuIcon'

const Cart = ({
  getCartItemsAsync,
  cartItem,
  totalItems,
  text = null
}) => {
  useEffect(() => {
    const initCartItem = async () => {
      await getCartItemsAsync()
    }

    if (!cartItem) {
      initCartItem(cartItem)

      return () => {
        initCartItem()
      }
    }
  }, [])

  return (
    <Badge x={console.log(totalItems)} count={totalItems}>
      <MenuIcon
        type="shopping-cart"
        link="/cart"
        text={text}
      />
    </Badge>
  )
}

Cart.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  getCartItemsAsync: PropTypes.func,
  totalItems: PropTypes.number,
  text: PropTypes.string
}

const mapDispatchToProps = ({
  carts: { getCartItemsAsync }
}) => ({
  getCartItemsAsync: () => getCartItemsAsync()
})

const mapStateToProps = ({
  carts: { totalItems }
}) => ({ totalItems })

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
