import {
  GET_COMMENTS,
  TOGGLE_EDIT_MODE,
  UPDATE_COMMENT,
  ADD_COMMENT
} from './actions'

const initialCategoryState = {
  editMode: {}
}

function comments ( state = initialCategoryState, action ) {
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
        [action.comment.parentId]: [
          ...state[action.comment.parentId],
          action.comment
        ]
      }

    case UPDATE_COMMENT :
      let updateComments = [...state[action.comment.parentId]]
      const index = updateComments.findIndex(i => i.id === action.comment.id)
      updateComments.splice(index, 1, action.comment)
      return {
        ...state,
        [action.comment.parentId]: updateComments
      }
    default :
      return state
  }
}

export default comments
