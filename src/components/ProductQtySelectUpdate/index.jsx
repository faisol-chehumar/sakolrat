import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const { Option } = Select

const QtySelect = styled(Select)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media(min-width: 992px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const ProductQtySelectUpdate = ({ id, quantity, updateItemHandle, setFirstFetch }) => {
  const handleChange = async (value) => {
    await updateItemHandle(id, value)
    setFirstFetch(true)
  }

  return (
    <QtySelect
      defaultValue={quantity}
      style={{ width: 120 }}
      onChange={handleChange}
      value={quantity}
    >
      {
        Array(10).fill('').map((_, index) => {
          const optionValue = index + 1

          return (
            <Option
              value={optionValue}
              key={optionValue}
            >
              {optionValue}
            </Option>
          )
        })
      }
    </QtySelect>
  )
}

ProductQtySelectUpdate.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  updateItemHandle: PropTypes.func,
  setFirstFetch: PropTypes.func
}

const mapDispatchToProps = ({ carts: { updateItem } }) => ({
  updateItem: (payload) => updateItem(payload)
})

export default connect(null, mapDispatchToProps)(ProductQtySelectUpdate)
