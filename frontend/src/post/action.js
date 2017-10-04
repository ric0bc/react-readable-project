import * as BackendAPI from '../utils/BackendAPI'
import { fetchAsyncComments } from '../comments/actions'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_BODY = 'CHANGE_BODY'
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const CHANGE_TIMESTAMP = 'CHANGE_TIMESTAMP'
export const CHANGE_ID = 'CHANGE_ID'
export const RESET_DETAILPOST = 'RESET_DETAILPOST'
export const VOTED_POST = 'VOTED_POST'

export function getAllPosts ({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export function fetchAsyncAllPosts() {
  return dispatch => (
    BackendAPI
      .fetchAllPosts()
      .then(posts => dispatch(getAllPosts({posts})))
  )
}

export function getPost (post) {
  return {
    type: GET_POST,
    post
  }
}

export function fetchAsyncPost(postId) {
  return dispatch => (
    BackendAPI
      .fetchPost(postId)
      .then(post => dispatch(getPost(post)))
      .then(data => dispatch(fetchAsyncComments(data.post.id)))
  )
}

function votePost(post) {
  return {
    type: VOTED_POST,
    post
  }
}

export function fetchVotingPost(postId, option) {
  return dispatch => (
    BackendAPI
      .postVoting(postId, option)
      .then(data => data.json())
      .then(post => dispatch(votePost(post)))
  )
}

/***
*
* Handle Form Inputs
*
***/

export function resetDetailPost() {
  return {
    type: RESET_DETAILPOST
  }
}

export function changeTitleInput(title) {
  return {
    type: CHANGE_TITLE,
    title
  }
}

export function changeBodyInput(body) {
  return {
    type: CHANGE_BODY,
    body
  }
}

export function changeAuthorInput(author) {
  return {
    type: CHANGE_AUTHOR,
    author
  }
}

export function changeCategoryValue(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  }
}

export function changeTimestampInput(timestamp) {
  return {
    type: CHANGE_TIMESTAMP,
    timestamp
  }
}

export function changeIdInput(id) {
  return {
    type: CHANGE_ID,
    id
  }
}
