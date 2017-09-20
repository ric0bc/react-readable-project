import {
  GET_CATEGORY_POSTS,
  GET_ALL_POSTS,
  GET_POST
} from './action'

const initialCategoryState = {
  posts: [],
  detailPost: ''
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
    case GET_POST :
      return {
        ...state,
          detailPost: action.post
      }
    default :
      return state
  }
}

export default posts
