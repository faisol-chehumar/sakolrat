import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
import styled from 'styled-components'

const WarningAlertContainer = styled(Alert)`
  padding: .5rem 0 .5rem 1rem !important;
  margin-bottom: .5rem !important;
`

const WarningAlert = ({ desc }) => (
  <WarningAlertContainer
    description={desc}
    type="error"
  />
)

WarningAlert.propTypes = {
  desc: PropTypes.string
}

export default WarningAlert
