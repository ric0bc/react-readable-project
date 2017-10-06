import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { PropTypes } from 'prop-types'

import Voting from '../voting/Voting'
import CommentEdit from './CommentEdit'
import CommentCreate from './CommentCreate'
import {
  toggleEditMode,
  fetchUpdateComment,
  fetchAddComment,
  fetchDeleteComment
} from './actions'

class Comment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired,
    onAddComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    onEditComment: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, { hash: true })
    const stringifyValues = JSON.stringify(values)

    if(values.parentId) {
      this.props.onAddComment(stringifyValues)
    } else {
      this.props.onEditComment(stringifyValues, values.id)
      this.props.toggleEdit(values.id)
    }
  }

  render() {
    const { comments, postId, toggleEdit, deleteComment } = this.props

    let allComments = comments[postId] instanceof Array ? comments[postId]
      .filter(comment => !comment.deleted) : []

    return (
      <div>
        {allComments.map(comment => (
            <div key={comment.id}>
            {comments.editMode[comment.id] ? (
              <CommentEdit
                body={comment.body}
                commentId={comment.id}
                onSubmit={this.handleSubmit} />
            ) : (
              <div>
                <p>{comment.body}</p>
                <Voting commentId={comment.id} voteScore={comment.voteScore} />
                <button
                  onClick={() => toggleEdit(comment.id)}>
                    Edit
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}>
                    Delete
                </button>
              </div>
            )}
            </div>
          ))}
          <CommentCreate onSubmit={this.handleSubmit} postId={postId} />
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  toggleEdit: (id) => dispatch(toggleEditMode(id)),
  onEditComment: (comment, id) => dispatch(fetchUpdateComment(comment, id)),
  onAddComment: (comment) => dispatch(fetchAddComment(comment)),
  deleteComment: (id) => dispatch(fetchDeleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
