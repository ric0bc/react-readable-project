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

    case VOTE_COMMENT :
      const newVotedComments = [...state[action.comment.parentId]]
      newVotedComments.map(comment => {
        if(comment.id === action.comment.id){
          comment.voteScore = action.comment.voteScore
        }
        return comment
      })
      return {
        ...state,
        [action.comment.parentId]: newVotedComments
      }
    case DELETE_COMMENT :
      const newComments = [...state[action.comment.parentId]]
      newComments.map(comment => {
        if(comment.id === action.comment.id) {
          comment.deleted = action.comment.deleted
        }
        return comment
      })
      return {
        ...state,
        [action.comment.parentId]: newComments
      }
    case DELETE_COMMENTS :
      const deleteComments = [...state[action.parentId]]
      deleteComments.map(comment => {
        comment.parentDeleted = true
      })
      return {
        ...state,
        [action.parentId]: deleteComments
      }
    default :
      return state
  }
}

export default comments
