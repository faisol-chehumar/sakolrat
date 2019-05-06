import React from 'react'
// import { Row, Col } from 'antd'
// import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProductItem = ({ data }) => (
  <h2>{ data.title }</h2>
)

ProductItem.propTypes = {
  data: PropTypes.array
}

export default ProductItem
