import * as BackendAPI from '../utils/BackendAPI'

export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export function getCategoryPosts ({ categoryPosts }) {
  return {
    type: GET_CATEGORY_POSTS,
    categoryPosts
  }
}

export function fetchAsnycCategoryPosts(category) {
  return dispatch => (
    BackendAPI
      .fetchCategoryPosts(category)
      .then(categoryPosts => dispatch(getCategoryPosts({categoryPosts})))
  )
}

export function getAllPosts ({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export function fetchAsnycAllPosts() {
  return dispatch => (
    BackendAPI
      .fetchAllPosts()
      .then(posts => dispatch(getAllPosts({posts})))
  )
}
