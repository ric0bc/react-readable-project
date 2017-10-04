import * as BackendAPI from '../utils/BackendAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_TO_POSTS = 'GET_COMMENTS_TO_POSTS'
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

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

function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function fetchAddComment (comment) {
  return dispatch => {
    BackendAPI.addComment(comment)
      .then(res => res.json())
      .then(comment => dispatch(addComment(comment)))
  }
}

function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function fetchUpdateComment (comment, id) {
  return dispatch => {
    BackendAPI.updateComment(comment, id)
      .then(res => res.json())
      .then(comment => dispatch(updateComment(comment)))
  }
}

function voteComment (comment) {
  return {
    type: VOTE_COMMENT,
    comment
  }
}

export function fetchVotingComment (id, option) {
  return dispatch => {
    BackendAPI.commentVoting(id, option)
      .then(res => res.json())
      .then(comment => dispatch(voteComment(comment)))
  }
}

/***
*
* Handle Form Fields
*
***/
