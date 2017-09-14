export function fetchCategories () {
  return fetch('http://localhost:3001/categories', {headers: {'Authorization': 'something'}})
  .then(res => res.json())
}
