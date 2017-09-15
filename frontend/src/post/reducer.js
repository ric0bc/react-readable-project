import { GET_CATEGORY_POSTS } from './action'

const initialCategoryState = {
  categoryPosts: []
}

function posts  (state = initialCategoryState, action)  {
  switch (action.type) {
    case GET_CATEGORY_POSTS :
      return {
        ...state,
        categoryPosts: action.categoryPosts
      }
    default :
      return state
  }
}

export default posts
