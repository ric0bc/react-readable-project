import {
  GET_ALL_POSTS,
  GET_POST,
  CHANGE_TITLE,
  CHANGE_BODY,
  CHANGE_AUTHOR,
  CHANGE_CATEGORY,
  CHANGE_TIMESTAMP,
  CHANGE_ID,
  RESET_DETAILPOST,
  VOTED_POST
} from './action'

const initialCategoryState = {
  allPosts: [],
  detailPost: {}
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
    case CHANGE_TITLE :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            title: action.title
          }
      }
    case CHANGE_BODY :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            body: action.body
          }
      }
    case CHANGE_AUTHOR :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            author: action.author
          }
      }
    case CHANGE_CATEGORY :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            category: action.category
          }
      }
    case CHANGE_TIMESTAMP :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            timestamp: action.timestamp
          }
      }
    case CHANGE_ID :
      return {
        ...state,
          detailPost: {
            ...state.detailPost,
            id: action.id
          }
      }
    case RESET_DETAILPOST :
      return {
        ...state,
          detailPost: {}
      }
    default :
      return state
  }
}

export default posts
