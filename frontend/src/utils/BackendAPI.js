const authorization = 'Something'
const url = 'http://localhost:3001/'

export function fetchCategories () {
  return fetch(`${url}categories`, {
    headers: {
      'Authorization': authorization
    }
  }).then(res => res.json())
}

export function fetchCategoryPosts (category) {
  return fetch(`${url}${category}/posts`, {
    headers: {'Authorization': authorization}
  }).then(res => res.json())
}

export function fetchAllPosts () {
  return fetch(`${url}posts`, {
    headers: {'Authorization': authorization}
  }).then(res => res.json())
}

export function fetchPost (postId) {
  return fetch(
    `${url}posts/${postId}`, {
      headers: { 'Authorization': authorization }
  }).then(res => res.json())
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

export function editPost (post, postId) {
  return fetch(`${url}posts/${postId}`, {
    method: 'PUT',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: post
  })
}

export function getComments (id) {
  return fetch(`${url}posts/${id}/comments`, {
    headers: { 'Authorization': authorization }
  }).then(res => res.json())
}

export function addComment (comment) {
  return fetch(`${url}comments`, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: comment
  })
}

export function updateComment (comment, id) {
  return fetch(`${url}comments/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: comment
  })
}

export function postVoting (id, option) {
  return fetch(`${url}posts/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: option
  })
}

export function commentVoting (id, option) {
  return fetch(`${url}comments/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': authorization,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: option
  })
}

export function deleteComment (id) {
  return fetch(`${url}comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': authorization
    }
  })
}

export function deletePost (id) {
  return fetch(`${url}posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': authorization
    }
  })
}
