import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { PropTypes } from 'prop-types'
import sortBy from 'sort-by'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import './comment.css'
import Voting from '../voting/Voting'
import CommentEdit from './CommentEdit'
import CommentCreate from './CommentCreate'
import * as actions from './actions'

class Comment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired,
    fetchAddComment: PropTypes.func.isRequired,
    fetchDeleteComment: PropTypes.func.isRequired,
    toggleEditMode: PropTypes.func.isRequired,
    fetchUpdateComment: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, { hash: true })
    const stringifyValues = JSON.stringify(values)

    if(values.parentId) {
      this.props.fetchAddComment(stringifyValues)
    } else {
      this.props.fetchUpdateComment(stringifyValues, values.id)
      this.props.toggleEditMode(values.id)
    }
  }

  render() {
    const { comments, postId, toggleEditMode, fetchDeleteComment } = this.props

    let allComments = comments[postId] instanceof Array ? comments[postId]
      .filter(comment => !comment.deleted).sort(sortBy('-voteScore')) : []
    return (
      <div>
        <h2>Comments</h2>
        {allComments.map(comment => (
            <Card className="comment" key={comment.id}>
              <div className="comment-body">
                <Voting commentId={comment.id} voteScore={comment.voteScore} />
                  {comments.editMode[comment.id] ? (
                    <CommentEdit
                      body={comment.body}
                      commentId={comment.id}
                      onSubmit={this.handleSubmit} />
                  ) : (
                      <div className="comment-body-main">
                        <CardHeader
                          subtitle={comment.author}
                        />
                        <CardText>
                        {comment.body}
                        </CardText>
                        <div className="">
                          <CardActions>
                            <FlatButton
                              label="Edit"
                              secondary={true}
                              onClick={() => toggleEditMode(comment.id)}
                            />
                            <FlatButton
                              label="Delete"
                              secondary={true}
                              onClick={() => fetchDeleteComment(comment.id)}
                            />
                          </CardActions>
                        </div>
                      </div>
                  )}
              </div>
            </Card>
          ))}
          <CommentCreate onSubmit={this.handleSubmit} postId={postId} />
      </div>
    )
  }
}

export default connect(null, actions)(Comment)
