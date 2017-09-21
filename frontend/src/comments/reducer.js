import {
  GET_COMMENTS
} from './action'

const initialCategoryState = {
  comments: []
}

function comments ( state = initialCategoryState, action ) {
  switch ( action.type ) {
    case GET_COMMENTS :
      return {
        ...state,
        comments: action.comments
      }
    default :
      return state
  }
}

export default comments
