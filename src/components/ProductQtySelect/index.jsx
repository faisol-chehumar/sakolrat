import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const { Option } = Select

const QtySelect = styled(Select)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media(min-width: 992px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const ProductQtySelect = ({ quantity, updateProductQty }) => {
  const handleChange = (value) => {
    updateProductQty(value)
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

ProductQtySelect.propTypes = {
  quantity: PropTypes.number,
  updateProductQty: PropTypes.func
}

export default ProductQtySelect
