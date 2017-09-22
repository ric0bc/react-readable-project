import {
  GET_COMMENTS
} from './actions'

const initialCategoryState = {
  comments: [],
  parentIdComments: []
}

function comments ( state = initialCategoryState, action ) {
  switch ( action.type ) {
    case GET_COMMENTS :
      let t = [...state.parentIdComments]
      const test = action.comments.reduce((comments, comment) => {
        if (comment.parentId in comments) {
          comments[comment.parentId]++
        } else {
          comments[comment.parentId] = 1
        }
        return comments
      }, {})
      t.push(test)
      return {
        ...state,
        comments: action.comments,
        parentIdComments: t
      }
    default :
      return state
  }
}

export default comments
