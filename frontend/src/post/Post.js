import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './post.css'

class Post extends Component {

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
