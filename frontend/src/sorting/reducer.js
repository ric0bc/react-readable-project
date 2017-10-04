import { CHANGE_SELECT_VALUE } from './action'

function selectFieldValue (state = { value: 'voteScore' }, action) {
  switch (action.type) {
    case CHANGE_SELECT_VALUE :
      return {
        ...state,
        value: action.value
      }
    default :
      return state
  }
}

export default selectFieldValue
