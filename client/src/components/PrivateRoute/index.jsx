
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (true && location.pathname !== '/login') {
    navigate(`/auth/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any
}

export default PrivateRoute
