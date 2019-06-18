import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InternalLink = ({ linkTo, linkText, marginLeft, ...rest }) => {
  const InternalLinkContainer = styled(Link)`
    color: #fa4c06;
    margin-left: ${marginLeft || 0};

    &:hover {
      color: #fa4c06;
      text-decoration: underline;
    }
  `

  return (
    <InternalLinkContainer
      to={linkTo}
      {...rest}
    >
      { linkText }
    </InternalLinkContainer>
  )
}

InternalLink.propTypes = {
  linkTo: PropTypes.string,
  linkText: PropTypes.string,
  marginLeft: PropTypes.string
}

export default InternalLink
