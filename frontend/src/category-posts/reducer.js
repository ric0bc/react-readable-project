import { GET_CATEGORY_POSTS } from './actions'

const initialCategoryState = {
  posts: []
}

function categoryPosts (state = initialCategoryState, action) {
  switch (action.type) {
    case GET_CATEGORY_POSTS :
      return {
        ...state,
        posts: action.posts
      }
    default :
      return state
  }
}

export default categoryPosts
