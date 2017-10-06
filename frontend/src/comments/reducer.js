import { replaceObjectInArray } from '../helper/Helper'
import {
  GET_COMMENTS,
  TOGGLE_EDIT_MODE,
  UPDATE_COMMENT,
  ADD_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENTS
} from './actions'

const initialCategoryState = {
  editMode: {}
}

function comments ( state = initialCategoryState, action ) {

  let index
  if(action.comment){
    index = [...state[action.comment.parentId]].findIndex(i => i.id === action.comment.id)
  }

  switch ( action.type ) {
    case GET_COMMENTS :
      let init = {...state}
      if(action.comments.length > 0) {
        const parentID = action.comments[0].parentId
        init[parentID] = action.comments
      } else {
        init[action.id] = []
      }
      return init
    case TOGGLE_EDIT_MODE :
      return {
        ...state,
        editMode: {
          ...state.editMode,
          [action.id]: !state.editMode[action.id]
        }
      }
    case ADD_COMMENT :
      return {
        ...state,
        [action.comment.parentId]: state[action.comment.parentId].concat(action.comment)
      }
    case UPDATE_COMMENT :
    case VOTE_COMMENT :
    case DELETE_COMMENT :
      return {
        ...state,
        [action.comment.parentId]: replaceObjectInArray([...state[action.comment.parentId]], index, action.comment)
      }
    case DELETE_COMMENTS :
      const deleteComments = [...state[action.parentId]]
      deleteComments.map(comment => comment.parentDeleted = true)
      return {
        ...state,
        [action.parentId]: deleteComments
      }
    default :
      return state
  }
}

export default comments
