import Moltin from '../../utils/moltin'

export const users = {
  state: {
    token: null,
    customer: null,
    customerDetail: null
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
    },
    setCustomerDetail (state, payload) {
      return {
        ...state,
        customerDetail: payload
      }
    }
  },

  effects: (dispatch) => ({
    async login ({ username, password }) {
      try {
        const { data } = await Moltin.Customers.Token(username, password)
        const customerDetail = await Moltin.Customers.Get(data.customer_id)

        dispatch.users.setToken(data.token)
        dispatch.users.setCustomer(data)
        dispatch.users.setCustomerDetail(customerDetail)

        return Promise.resolve(data)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async logout () {
      await dispatch.users.setToken(null)
      await dispatch.users.setCustomer(null)
    },
    async getUser (_, rootState) {
      const data = rootState.users.token

      try {
        const customer = await Moltin.Customers.Get(data.customer_id)
        dispatch.users.setCustomer(customer)

        return Promise.resolve(customer)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }),

  selectors: {
    isAuthenticated () {
      return (rootState, _) => rootState.users.token !== null
    }
  }
}
