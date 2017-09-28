import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import CommentsCount from './CommentsCount'

class Comment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired
  }

  render() {
    const { comments, postId } = this.props

    return (
      <div>
        {comments[postId] instanceof Array && comments[postId].map(comment => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Comment
