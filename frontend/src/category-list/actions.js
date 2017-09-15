import * as BackendAPI from '../utils/BackendAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function fetchAllCategories() {
  return dispatch => (
    BackendAPI
      .fetchCategories()
      .then(results => dispatch(getCategories(results.categories)))
  )
}
