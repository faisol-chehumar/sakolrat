import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const GrayCardContainer = styled(Card)`
  background-color: #fafafa !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
`

const GrayCard = ({ children }) => (
  <GrayCardContainer>
    { children }
  </GrayCardContainer>
)

GrayCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default GrayCard
