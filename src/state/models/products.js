import Moltin from '../../utils/moltin'
import _ from 'lodash'

export const products = {
  state: {
    productItems: []
  },

  reducers: {
    setProducts (state, payload) {
      return {
        ...state,
        productItems: payload
      }
    }
  },

  effects: (dispatch) => ({
    async getAllProductItems () {
      try {
        const { data, included } = await Moltin.Products.With('main_image').Limit(30).All()
        const uniqueProduct = _.uniqBy(data, 'name')

        const uniqueProductWithImage = uniqueProduct.map(product => {
          const imageId = product.relationships.main_image
            ? product.relationships.main_image.data.id
            : false

          return {
            ...product,
            mainImageHref: imageId
              ? included.main_images.find(image => image.id === imageId).link.href
              : 'https://via.placeholder.com/150'
          }
        })

        dispatch.products.setProducts(uniqueProductWithImage)

        return Promise.resolve(uniqueProduct)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  })
}
