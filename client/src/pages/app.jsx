import React from 'react'
import { Router } from '@reach/router'
import components from '../components'

import Login from './auth/login'
import AccountDashboard from '../views/account/dashboard'

const { PrivateRoute } = components

const App = () => (
  <div>
    <Router>
      <PrivateRoute path="/account/dashboard" component={AccountDashboard} />
      <Login path="/auth/login" />
    </Router>
  </div>
)

export default App
