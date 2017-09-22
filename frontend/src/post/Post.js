import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import './post.css'
import Comment from '../comments/Comment'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const { post } = this.props

    return (
      <li className="post-item" key={post.id}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.body}</p>
        <p>author: {post.author}</p>
        <div>{post.voteScore}</div>
        <Link to={`/edit/${post.id}`}>Edit</Link>
        <Comment postId={post.id} />
      </li>
    )
  }
}

// const mapStateToProps = state => ({posts: state.posts})
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchCategoryPosts: (category) => dispatch(fetchAsyncCategoryPosts(category)),
//   fetchAllPosts: () => dispatch(fetchAsyncAllPosts())
//     .then( data => fetchCommentsToPosts(data.posts))
// })

 export default Post//connect(mapStateToProps, mapDispatchToProps)(Post)
