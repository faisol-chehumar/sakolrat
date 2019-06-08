import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InternalLinkContainer = styled(Link)`
  color: #eee;
`

const InternalLink = ({ linkTo, linkText }) => (
  <InternalLinkContainer to={linkTo}>
    { linkText }
  </InternalLinkContainer>
)

InternalLink.propTypes = {
  linkTo: PropTypes.string,
  linkText: PropTypes.string
}

export default InternalLink
