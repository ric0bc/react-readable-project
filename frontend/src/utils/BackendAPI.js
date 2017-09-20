const authorization = 'Something'
const url = 'http://localhost:3001/'

export function fetchCategories () {
  return fetch(`${url}categories`, {headers: {'Authorization': authorization}})
  .then(res => res.json())
}
export function fetchCategoryPosts (category) {
  return fetch(`${url}${category}/posts`, {
    headers: {'Authorization': authorization}
  })
  .then(res => res.json())
}
export function fetchAllPosts () {
  return fetch(`${url}posts`, {
    headers: {'Authorization': authorization}
  })
  .then(res => res.json())
}
