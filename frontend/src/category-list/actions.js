import * as CategoriesAPI from '../utils/CategoriesAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function fetchAllCategories() {
  return dispatch => (
    CategoriesAPI
      .fetchCategories()
      .then(categories => dispatch(getCategories(categories)))
  )
}
