import {
  GET_COMMENTS,
  TOGGLE_EDIT_MODE
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

    default :
      return state
  }
}

export default comments
