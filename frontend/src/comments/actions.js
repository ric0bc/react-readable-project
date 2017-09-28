import * as BackendAPI from '../utils/BackendAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_TO_POSTS = 'GET_COMMENTS_TO_POSTS'
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE'
export const CHANGE_BODY = 'CHANGE_BODY'

function getComments (comments, id) {
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

export function toggleEditMode (id) {
  return {
    type: TOGGLE_EDIT_MODE,
    id
  }
}

/***
*
* Handle Form Fields
*
***/
