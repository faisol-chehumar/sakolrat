import React from 'react'
import { Router } from '@reach/router'
import components from '../components'

import AuthLogin from './auth/login'
import AccountDashboard from '../views/account/dashboard'
import Order from '../views/account/order'

const { PrivateRoute } = components

const App = () => (
  <div>
    <Router>
      <PrivateRoute path="/account/dashboard" component={AccountDashboard} />
      <PrivateRoute path="/account/order" component={Order} />
      <AuthLogin path="/auth/login" />
    </Router>
  </div>
)

export default App
