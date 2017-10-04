import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import './post.css'
import CommentsCount from '../comments/CommentsCount'
import VotingPost from './voting-post/VotingPost'
import PostDeleteBtn from './post-delete-btn/PostDeleteBtn'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }



  handleTouchStart = () => {
    console.log('test');
  }

  handleTouchEnd = () => {
    console.log('end');
  }

  render() {
    const { post } = this.props

    return (
      <li
        className="post-item"
        key={post.id}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <div className="post-content">
          <Link to={`/post/${post.id}`}>
            <p className="post-title">{post.title}</p>
          </Link>
          <p className="post-body">{post.body}</p>
          <div className="post-sub-details">
            <p className="post-author">Author: {post.author}</p>
            <div className="post-comments">
              <p>Comments:</p>
              <CommentsCount postId={post.id} comments={{}}/>
            </div>
            <p className="post-timestamp">{post.timestamp}</p>
          </div>
        </div>
        <div className="post-details">
          <VotingPost post={post} />
          <Link to={`/edit/${post.id}`}>Edit</Link>
          <PostDeleteBtn postId={post.id}/>
        </div>
      </li>
    )
  }
}


 export default Post
