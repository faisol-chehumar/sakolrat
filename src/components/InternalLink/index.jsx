import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InternalLink = ({ linkTo = null, linkText, marginLeft, ...rest }) => {
  const InternalLinkContainer = styled(Link)`
    color: #152D5A;
    margin-left: ${marginLeft || 0};

    &:hover {
      color: #152D5A;
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
