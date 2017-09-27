import * as BackendAPI from '../utils/BackendAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_TO_POSTS = 'GET_COMMENTS_TO_POSTS'

function getComments (comments, id) {
  console.log('id', comments);
  return {
    type: GET_COMMENTS,
    comments,
    id
  }
}

export function fetchAsyncComments (id) {
  return dispatch => {
    BackendAPI.getComments(id)
      .then(comments => dispatch(getComments(comments, id)))
  }
}
