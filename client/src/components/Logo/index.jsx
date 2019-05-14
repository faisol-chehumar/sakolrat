import React from 'react'
import { Link } from 'gatsby'

const Logo = ({ ...rest }) => (
  <>
    <Link to="/">
      <img
        src={'/logo.svg'}
        alt="Website logo"
        {...rest}
      />
    </Link>
  </>
)

export default Logo
