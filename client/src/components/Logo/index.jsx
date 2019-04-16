import React from 'react'

import logoUrl from '../../images/logo.svg'

const Logo = ({ ...rest }) => (
  <>
    <a href="/">
      <img
        src={logoUrl}
        alt="Website logo"
        {...rest}
      />
    </a>
  </>
)

export default Logo
