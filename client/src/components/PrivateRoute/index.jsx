
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, location, customer, ...rest }) => {
  const isAuth = customer && customer.token

  if (!isAuth && location.pathname !== '/login') {
    navigate(`/auth/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any,
  customer: PropTypes.any
}

const mapStateToProps = ({
  users: { customer }
}) => ({ customer })

export default connect(mapStateToProps)(PrivateRoute)
