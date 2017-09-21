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

export function fetchPost(postId) {
  return fetch(
    `${url}posts/${postId}`, {
      headers: { 'Authorization': authorization }
  })
  .then(res => res.json())
}

export function addPost (post) {
  return fetch(`${url}posts`, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: post
  })
}
