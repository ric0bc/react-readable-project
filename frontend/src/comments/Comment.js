import React, { Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { PropTypes } from 'prop-types'

import * as BackendAPI from '../utils/BackendAPI'
import CommentsCount from './CommentsCount'
import { toggleEditMode } from './actions'

class Comment extends Component {
  state = {
    inputBody: ''
  }
  static propTypes = {
    postId: PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const values = serializeForm(event.target, { hash: true })
    const stringifyValues = JSON.stringify(values)

    if(values.parentId) {
      BackendAPI.addComment(stringifyValues)
    } else {
      BackendAPI.editComment(stringifyValues, values.id)
      this.handleEditMode(values.id)
    }
  }

  handleEditMode = (id) => {
    this.props.toggleEdit(id)
  }

  render() {
    const { comments, postId } = this.props

    console.log(this.props)

    return (
      <div>
        {comments[postId] instanceof Array && comments[postId].map(comment => (
          <div key={comment.id}>
            {this.props.comments.editMode[comment.id] ? (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input name="id" type="hidden" value={comment.id} />
                  <input name="timestamp" type="hidden" value={Date.now()} />
                  <textarea
                    name="body"
                    type="text"
                    value={ this.state.inputBody || comment.body}
                    onChange={(e) => this.setState({ inputBody: e.target.value})} />
                  <br/>
                  <input
                    type="submit"
                    value="Done"  />
                </form>
              </div>
            ) : (
              <div>
                <span><p>{comment.body}</p></span>
                <button
                  onClick={() => this.handleEditMode(comment.id)}>
                    Edit
                </button>
              </div>
            ) }
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input name="id" type="hidden" value={Date.now()} />
          <input name="parentId" type="hidden" value={postId} />
          <input name="timestamp" type="hidden" value={Date.now()} />
          <div>
            <label>Body: </label>
            <input name="body" type="text" />
          </div>
          <div>
            <label>Author: </label>
            <input name="author" type="text" />
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  toggleEdit: (id) => dispatch(toggleEditMode(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
