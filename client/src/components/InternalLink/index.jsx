import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InternalLinkContainer = styled(Link)`
  color: #fa4c06;
  margin-left: ${props => props.marginLeft || 0};

  &:hover {
    color: #fa4c06;
    text-decoration: underline;
  }
`

const InternalLink = ({ linkTo, linkText, ...rest }) => (
  <InternalLinkContainer to={linkTo} {...rest}>
    { linkText }
  </InternalLinkContainer>
)

InternalLink.propTypes = {
  linkTo: PropTypes.string,
  linkText: PropTypes.string
}

export default InternalLink
