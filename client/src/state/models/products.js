export const products = {
  state: [],
  reducers: {
    setProducts (state, payload) {
      return [...payload]
    }
  }
}
