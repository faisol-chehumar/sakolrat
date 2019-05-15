import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `SET_PRODUCTS`) {
    return {
      ...state,
      products: action.payload
    }
  }
  if (action.type === `SET_CURRENT_BREADCRUMB`) {
    return {
      ...state,
      currentBreadcrumb: action.payload
    }
  }
  return state
}

const initialState = {
  products: [],
  sortBy: [
    'Featured',
    'Rating',
    'Brand',
    'Best Sellers',
    'Newest Arrivals',
    'Price: Low to High',
    'Price: High to Low'
  ],
  currentBreadcrumb: ''
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
