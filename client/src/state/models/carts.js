import uuidv4 from 'uuid/v4'
import Moltin from '../../utils/moltin'

export const carts = {
  state: {
    cartItem: [],
    totalPrice: 0,
    cartId: null
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
    }
  },

  effects: (dispatch) => ({
    async getCartId (_, rootState) {
      const cartId = rootState.carts.cartId

      if (cartId) {
        return Promise.resolve(cartId)
      }

      try {
        const customer = await dispatch.user.getUser()

        return Promise.resolve(customer.id)
      } catch (e) {
        const localCartId = localStorage.getItem('cartId')

        if (!localCartId) {
          const newCartId = uuidv4()
          localStorage.setItem('cartId', newCartId)
        }

        return localCartId
      }
    },
    async getCartItemsAsync () {
      const cartId = await dispatch.carts.getCartId()
      const cartData = await Moltin.Cart(cartId)
      console.log(cartData)
      // const cleanData = res.data.data.map((item) => {
      //   return {
      //     id: item.id,
      //     productId: item.product_id,
      //     amount: item.quantity,
      //     name: item.name,
      //     image: 'https://via.placeholder.com/300x400.png',
      //     totalPrice: item.meta.display_price.with_tax.value.formatted,
      //     pricePerUnit: item.meta.display_price.with_tax.unit.formatted,
      //   }
      // })
      // const totalPrice = res.data.meta.display_price.with_tax.amount / 100
      // dispatch.cart.setCartItems(cleanData)
      // dispatch.cart.setTotalPrice(totalPrice)
    },
    async addItem (payload, _) {
      const cartId = await dispatch.cart.getCartId()
      await Moltin.Cart(cartId).AddProduct(payload.productId, payload.quantity)
      await dispatch.cart.getCartItemsAsync()
    },
    async deleteItem (payload, _) {
      const cartId = await dispatch.cart.getCartId()
      await Moltin.Cart(cartId).RemoveItem(payload.itemId)
      await dispatch.cart.getCartItemsAsync()
    }
  })
}
