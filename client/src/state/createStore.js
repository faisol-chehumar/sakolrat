import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `SET_PRODUCTS`) {
    return {
      ...state,
      products: action.payload
    }
  }
  return state
}

const initialState = { products: [] }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
