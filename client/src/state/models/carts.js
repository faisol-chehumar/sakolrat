import uuidv4 from 'uuid/v4'
import Moltin from '../../utils/moltin'

export const carts = {
  state: {
    cartItem: [],
    totalPrice: 0,
    cartId: null,
    totalItems: 0
  },
  reducers: {
    setCartItems (state, payload) {
      return {
        ...state,
        cartItem: payload
      }
    },
    setTotalPrice (state, payload) {
      return {
        ...state,
        totalPrice: payload
      }
    },
    setCartId (state, payload) {
      return {
        ...state,
        cartId: payload
      }
    },
    setTotalItems (state, payload) {
      return {
        ...state,
        totalItems: payload
      }
    }
  },

  effects: (dispatch) => ({
    async getCartId (_, rootState) {
      const cartId = rootState.carts.cartId

      if (cartId) {
        return Promise.resolve(cartId)
      }

      try {
        const customer = await dispatch.users.getUser()

        return Promise.resolve(customer.id)
      } catch (e) {
        const localCartId = localStorage.getItem('cartId')

        if (!localCartId) {
          const newCartId = uuidv4()
          localStorage.setItem('cartId', newCartId)

          return localStorage.getItem('cartId')
        }

        return localCartId
      }
    },
    async getCartItemsAsync () {
      const cartId = await dispatch.carts.getCartId()
      const cartData = await Moltin.Cart(cartId).Items('include')
      const cleanData = cartData.data.map((item) => {
        return {
          id: item.id,
          productId: item.product_id,
          amount: item.quantity,
          name: item.name,
          image: item.image.href,
          totalPrice: item.meta.display_price.with_tax.value.formatted,
          pricePerUnit: item.meta.display_price.with_tax.unit.formatted
        }
      })

      const totalPrice = cartData.meta.display_price.with_tax.amount
      const totalItems = cleanData.reduce((accumulator = 0, currentValue) => {
        return accumulator + currentValue.amount
      }, 0)

      dispatch.carts.setCartItems(cleanData)
      dispatch.carts.setTotalPrice(totalPrice)
      dispatch.carts.setTotalItems(totalItems)
    },
    async addItem (payload, _) {
      const cartId = await dispatch.carts.getCartId()
      const result = await Moltin.Cart(cartId).AddProduct(payload.id, payload.quantity)
      await dispatch.carts.getCartItemsAsync()
      return result
    },
    async deleteItem (payload, _) {
      const cartId = await dispatch.carts.getCartId()
      await Moltin.Cart(cartId).RemoveItem(payload.itemId)
      await dispatch.cart.getCartItemsAsync()
    }
  })
}
