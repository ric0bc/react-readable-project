import { replaceObjectInArray } from '../helper/Helper'
import {
  GET_ALL_POSTS,
  GET_POST,
  VOTED_POST,
  SORT_POSTS,
  DELETE_POST,
  EDIT_POST,
  ADD_POST
} from './action'

const initialCategoryState = {
  allPosts: [],
  detailPost: {}
}

function posts (state = initialCategoryState, action)  {

  let index
  if(action.post) {
    index = [...state.allPosts].findIndex(i => i.id === action.post.id)
  }

  switch (action.type) {
    case GET_ALL_POSTS :
      return {
        ...state,
          allPosts: action.posts
      }
    case GET_POST :
      return {
        ...state,
          detailPost: action.post
      }
    case ADD_POST :
      return {
        ...state,
        allPosts: state.allPosts.concat(action.post)
      }
    case DELETE_POST :
      return {
        ...state,
        allPosts: replaceObjectInArray([...state.allPosts], index, action.post)
      }
    case EDIT_POST :
    case VOTED_POST :
      return {
        ...state,
        allPosts: replaceObjectInArray([...state.allPosts], index, action.post),
        detailPost: action.post
      }
    case SORT_POSTS :
      return {
        ...state,
        allPosts: action.posts
      }
    default :
      return state
  }
}

export default posts
