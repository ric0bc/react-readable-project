import { GET_CATEGORIES } from './actions'

const initialCategoryState = {
  categories: []
}

function category  (state = initialCategoryState, action)  {
  switch (action.type) {
    case GET_CATEGORIES :
      return {...action.categories}
    default :
      return state
  }
}

export default category
