import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAsyncPost } from '../action'
import Comment from '../../comments/Comment'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post)
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <div>
          <h3>{posts.detailPost.title}</h3>
        </div>
        <Comment />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsyncPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
