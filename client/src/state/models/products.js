export const products = {
  state: [],
  reducers: {
    setProducts (_, payload) {
      return [...payload]
    }
  }
}
