import Moltin from '../../utils/moltin'

export const users = {
  state: {
    token: null,
    customer: null
  },
  reducers: {
    setToken (state, payload) {
      return {
        ...state,
        token: payload
      }
    },
    setCustomer (state, payload) {
      return {
        ...state,
        customer: payload
      }
    }
  },
  effects: (dispatch) => ({
    async login (payload, _) {
      try {
        const result = await Moltin.Customers.Token(payload.username, payload.password)
        dispatch.users.setToken(result.data.token)

        return result.data
      } catch (e) {
        return e
      }
    }
  }),
  selectors: {
    isAuthenticated () {
      return (rootState, _) => rootState.user.token !== null
    }
  }
}
