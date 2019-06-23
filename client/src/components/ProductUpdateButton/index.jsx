import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from '../Button'

const ProductUpdateButton = ({
  id,
  quantity,
  updateItem,
  onUpdateComplete
}) => {
  const updateHandle = (id, quantity) => async (e) => {
    e.preventDefault()

    await updateItem({
      id,
      quantity
    })

    onUpdateComplete()
  }

  return (
    <Button
      type="primary"
      text="UPDATE"
      onClick={updateHandle(id, quantity, updateItem)}
    />
  )
}

ProductUpdateButton.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  updateItem: PropTypes.func,
  onUpdateComplete: PropTypes.func
}

const mapDispatchToProps = ({ carts: { updateItem } }) => ({
  updateItem: (payload) => updateItem(payload)
})

export default connect(null, mapDispatchToProps)(ProductUpdateButton)
