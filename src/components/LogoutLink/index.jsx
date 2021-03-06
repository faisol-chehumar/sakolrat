import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import InternalLink from '../InternalLink'

const LogoutLinkContainer = styled.span`
  margin-left: 1rem !important;
`

const LogoutLink = ({ logout }) => {
  const logoutHandle = () => {
    logout()
  }

  return (
    <LogoutLinkContainer>
      <InternalLink
        linkTo="/auth/login"
        linkText="Logout"
        onClick={logoutHandle}
      />
    </LogoutLinkContainer>
  )
}

LogoutLink.propTypes = {
  logout: PropTypes.func
}

const mapDispatchToProps = ({ users: { logout } }) => ({
  logout: () => logout()
})

export default connect(null, mapDispatchToProps)(LogoutLink)
