import {
  GET_COMMENTS
} from './actions'

const initialCategoryState = {}

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
    default :
      return state
  }
}

export default comments
