import * as BackendAPI from '../utils/BackendAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_TO_POSTS = 'GET_COMMENTS_TO_POSTS'

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

// function getCommentsToPost(comments) {
//   console.log(comments);
//   return {
//     type: GET_COMMENTS_TO_POSTS,
//     comments
//   }
// }

export function fetchCommentsToPosts(posts) {
  return console.log(posts.map(post => BackendAPI.getComments(post.id)))
}
