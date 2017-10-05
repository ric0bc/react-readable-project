import {
  GET_ALL_POSTS,
  GET_POST,
  VOTED_POST,
  SORT_POSTS,
  DELETE_POST,
  EDIT_POST,
  ADD_POST
} from './action'

const initialCategoryState = {
  allPosts: [],
  detailPost: {}
}

function replaceObjectInArray(array, newIndex, action) {
  return array.map((item, index) => {
    if(index !== newIndex){
      return item
    }
    return {
      ...item,
      ...action.post
    }
  })
}

function posts  (state = initialCategoryState, action)  {
  switch (action.type) {
    case GET_ALL_POSTS :
      return {
        ...state,
          allPosts: action.posts
      }
    case GET_POST :
      return {
        ...state,
          detailPost: action.post
      }
    case ADD_POST :
      let postsArray = [...state.allPosts]
      postsArray.push(action.post)
      return {
        ...state,
        allPosts: postsArray
      }
    case EDIT_POST :
      const index = [...state.allPosts].findIndex(i => i.id === action.post.id)
      return {
        ...state,
        allPosts: replaceObjectInArray([...state.allPosts], index, action)
      }
    case VOTED_POST :
      const newVotedPosts = [...state.allPosts]
      newVotedPosts.map(post => {
        if(post.id === action.post.id){
          post.voteScore = action.post.voteScore
        }
        return post
      })
      return {
        ...state,
        allPosts: newVotedPosts,
        detailPost: {
          ...state.detailPost,
          voteScore: action.post.voteScore
        }
      }
    case SORT_POSTS :
      return {
        ...state,
        allPosts: action.posts
      }
    case DELETE_POST :
      const newPosts = [...state.allPosts]
      newPosts.map(post => {
        if(post.id === action.post.id){
          post.deleted = action.post.deleted
        }
        return post
      })
      return {
        ...state,
        allPosts: newPosts
      }
    default :
      return state
  }
}

export default posts
