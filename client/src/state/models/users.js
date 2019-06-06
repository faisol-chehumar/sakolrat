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
    async login (payload) {
      try {
        const { data } = await Moltin.Customers.Token(payload.username, payload.password)
        dispatch.users.setToken(data.token)
        dispatch.users.setCustomer(data)

        return Promise.resolve(data)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async logout () {
      await dispatch.users.setToken(null)
    }
  }),
  selectors: {
    isAuthenticated () {
      return (rootState, _) => rootState.users.token !== null
    }
  }
}
