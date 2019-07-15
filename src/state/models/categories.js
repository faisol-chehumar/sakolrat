import Moltin from '../../utils/moltin'

export const categories = {
  state: {
    categories: null,
    subCategories: []
  },

  reducers: {
    setCategories (state, payload) {
      return {
        ...state,
        categories: payload
      }
    },
    setSubCategories (state, payload) {
      return {
        ...state,
        subCategories: payload
      }
    }
  },

  effects: (dispatch) => ({
    async getCategories () {
      try {
        const categories = await Moltin.Categories.Tree()

        dispatch.categories.setCategories(categories.data)

        return Promise.resolve(categories)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getSubCategories () {
      try {
        const subCategories = await Moltin.Flows.GetEntries('sub-categories')

        dispatch.categories.setSubCategories(subCategories.data)

        return Promise.resolve(subCategories)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  })
}
