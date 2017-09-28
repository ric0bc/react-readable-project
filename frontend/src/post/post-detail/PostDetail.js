import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      <div>
        <div>
          <h3>{posts.detailPost.title}</h3>
          <CommentsCount
            postId={match.params.post}
            comments={comments} />
        </div>
          <Comment
            postId={match.params.post}
            comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsyncPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
