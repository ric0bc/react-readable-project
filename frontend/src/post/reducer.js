import {
  GET_CATEGORY_POSTS,
  GET_ALL_POSTS
} from './action'

const initialCategoryState = {
  posts: []
}

function posts  (state = initialCategoryState, action)  {
  switch (action.type) {
    case GET_CATEGORY_POSTS :
      return {
        ...state,
        posts: action.categoryPosts
      }
    case GET_ALL_POSTS :
      return {
        ...state,
          posts: action.posts
      }
    default :
      return state
  }
}

export default posts
