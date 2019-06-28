import React from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'

import store from './src/state'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store}>
      <CookiesProvider>
        {element}
      </CookiesProvider>
    </Provider>
  )
}
