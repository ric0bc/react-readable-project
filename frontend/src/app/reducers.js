import { combineReducers } from 'redux'

import category from '../category-list/reducer'
import posts from '../post/reducer'
import comments from '../comments/reducer'
import categoryPosts from '../category-posts/reducer'
import selectFieldValue from '../sorting/reducer'

export default combineReducers({
  posts,
  category,
  comments,
  categoryPosts,
  selectFieldValue
})
