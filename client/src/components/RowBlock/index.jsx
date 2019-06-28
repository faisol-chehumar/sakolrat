import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RowBlockContainer = styled(Row)`
  margin-bottom: 1rem;
`

const RowBlock = ({ children, ...rest }) => (
  <RowBlockContainer {...rest}>
    { children }
  </RowBlockContainer>
)

RowBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default RowBlock
