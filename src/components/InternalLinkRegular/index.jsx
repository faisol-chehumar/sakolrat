import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InternalLinkRegular = ({ linkTo = null, linkText, marginLeft, ...rest }) => {
  const InternalLinkContainer = styled(Link)`
    color: #555;
    margin-left: ${marginLeft || 0};
    font-size: .7rem;
    line-height: 2;

    &:hover {
      color: #555;
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

InternalLinkRegular.propTypes = {
  linkTo: PropTypes.string,
  linkText: PropTypes.string,
  marginLeft: PropTypes.string
}

export default InternalLinkRegular
