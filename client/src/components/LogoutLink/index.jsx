import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LogoutLinkContainer = styled(Link)`
  margin-left: 1rem;
`

const LogoutLink = ({ logout }) => (
  <LogoutLinkContainer
    to="/"
    onClick={() => logout()}
  >
    Logout
  </LogoutLinkContainer>
)

LogoutLink.propTypes = {
  logout: PropTypes.func
}

const mapDispatchToProps = ({ users: { logout } }) => ({
  logout: () => logout()
})

export default connect(null, mapDispatchToProps)(LogoutLink)
