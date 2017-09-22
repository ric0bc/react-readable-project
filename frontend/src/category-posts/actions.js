import * as BackendAPI from '../utils/BackendAPI'

export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

function getCategoryPosts (posts) {
  return {
    type: GET_CATEGORY_POSTS,
    posts
  }
}

export function fetchAsyncCategoryPosts(category) {
  return dispatch => (
    BackendAPI
      .fetchCategoryPosts(category)
      .then(categoryPosts => dispatch(getCategoryPosts(categoryPosts)))
  )
}
