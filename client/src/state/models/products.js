const products = {
  state: [],
  reducers: {
    setProducts (state, payload) {
      return [...payload]
    }
  },
  effects: (dispatch) => ({
    async setProductsAsync (payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.products.setProducts(payload)
    }
  })
}

export default products
