import React from 'react'
import PropTypes from 'prop-types'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'

const NotFoundPage = ({ location }) => (
  <Theme>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Theme>
)

NotFoundPage.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default NotFoundPage
