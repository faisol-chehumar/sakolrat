import React from 'react'

const Logo = ({ ...rest }) => (
  <>
    <a href="/">
      <img
        src={'logo.svg'}
        alt="Website logo"
        {...rest}
      />
    </a>
  </>
)

export default Logo
