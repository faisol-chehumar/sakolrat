import Moltin from '../../utils/moltin'
import _ from 'lodash'

export const products = {
  state: {
    productItems: [],
    productQuery: ''
  },

  reducers: {
    setProducts (state, payload) {
      return {
        ...state,
        productItems: payload
      }
    },
    setProductQuery (state, payload) {
      return {
        ...state,
        productQuery: payload
      }
    }
  },

  effects: (dispatch) => ({
    async getAllProductItems ({ query }) {
      const search = query.length > 0 ? query : '*'

      try {
        const { data, included } = await Moltin.Products
          .Filter(query && { like: { name: `*${search}*` } })
          .With('main_image')
          .Limit(30)
          .All()

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
        dispatch.products.setProductQuery(search)

        return Promise.resolve(uniqueProduct)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  })
}
