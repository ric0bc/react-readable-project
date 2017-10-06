import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class CommentCreate extends Component {
  state = {
    body: '',
    author: ''
  }

  static propTypes = {
    postId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    this.props.onSubmit(e)
    this.setState({
      body: '',
      author: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="id" type="hidden" value={Date.now()} />
        <input name="parentId" type="hidden" value={this.props.postId} />
        <input name="timestamp" type="hidden" value={Date.now()} />
        <div>
          <label>Body: </label>
          <input
            name="body"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}/>
        </div>
        <div>
          <label>Author: </label>
          <input
            name="author"
            type="text"
            value={this.state.author}
            onChange={this.handleChange}/>
        </div>
        <input type="submit" />
      </form>
    )
  }
}

export default CommentCreate
