import * as BackendAPI from '../utils/BackendAPI'
import { fetchAsyncComments } from '../comments/actions'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const VOTED_POST = 'VOTED_POST'
export const SORT_POSTS = 'SORT_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_POST = 'ADD_POST'

function getAllPosts ({ posts }) {
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

function getPost (post) {
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

function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function fetchAddPost(values) {
  return dispatch => (
    BackendAPI.addPost(values)
      .then(res => res.json())
      .then(post => dispatch(addPost(post)))
  )
}

function editPost(post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function fetchEditPost(values, id) {
  return dispatch => (
    BackendAPI.editPost(values, id)
      .then(res => res.json())
      .then(post => dispatch(editPost(post)))
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

function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function fetchDeletePost(id) {
  return dispatch => {
    BackendAPI.deletePost(id)
      .then(res => res.json())
      .then(post => dispatch(deletePost(post)))
  }
}

/***
*
* Sorting Posts
*
***/

export function sorted(posts) {
  return {
    type: SORT_POSTS,
    posts
  }
}
