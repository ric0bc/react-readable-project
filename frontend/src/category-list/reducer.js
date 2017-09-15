import { GET_CATEGORIES } from './actions'

const initialCategoryState = {
  categories: []
}

function category  (state = initialCategoryState, action)  {
  switch (action.type) {
    case GET_CATEGORIES :
      return {
        ...state,
        categories: action.categories
      }
    default :
      return state
  }
}

export default category
