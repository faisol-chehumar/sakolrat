import React from 'react'
import { Link } from 'gatsby'

const Logo = ({ ...rest }) => (
  <>
    <Link to="/">
      <img
        src={'/SAKOLRAT-LOGO.png'}
        alt="Sakolrat Website logo"
        width="100%"
        {...rest}
      />
    </Link>
  </>
)

export default Logo
