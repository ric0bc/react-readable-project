import * as BackendAPI from '../utils/BackendAPI'

export const GET_COMMENTS = 'GET_COMMENTS'

function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function fetchAsyncComments (id) {
  return dispatch => {
    BackendAPI.getComments(id)
      .then(comments => dispatch(getComments(comments)))
  }
}
