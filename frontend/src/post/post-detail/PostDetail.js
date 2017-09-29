import React, { Component } from 'react'
import { connect } from 'react-redux'

import './post-detail.css'
import { fetchAsyncPost } from '../action'
import Comment from '../../comments/Comment'
import CommentsCount from '../../comments/CommentsCount'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post)
  }

  render() {
    const { posts, comments, match } = this.props

    return (
      <div className="posts">
        <div className="post">
          <div className="detail-post-body">
            <h1 className="detail-post-title">{posts.detailPost.title}</h1>
            <p>{posts.detailPost.body}</p>
            <CommentsCount
              postId={match.params.post}
              comments={comments} />
          </div>
          <div className="detail-post-comment">
            <Comment
              postId={match.params.post}
              comments={comments} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsyncPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
