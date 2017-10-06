import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class CommentEdit extends Component {
  state = {
    body: this.props.body
  }

  static propTypes = {
    commentId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input name="id" type="hidden" value={this.props.commentId} />
        <input name="timestamp" type="hidden" value={Date.now()} />
        <textarea
          name="body"
          type="text"
          value={this.state.body}
          onChange={this.handleChange} />
        <br/>
        <input type="submit" value="Done"  />
      </form>
    )
  }
}

export default CommentEdit
