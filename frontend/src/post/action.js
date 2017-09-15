import * as BackendAPI from '../utils/BackendAPI'

export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'

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
