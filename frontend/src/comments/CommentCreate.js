import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

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
      <Card>
        <CardHeader title="Add a comment" />
        <form onSubmit={this.handleSubmit}>
          <input name="id" type="hidden" value={Date.now()} />
          <input name="parentId" type="hidden" value={this.props.postId} />
          <input name="timestamp" type="hidden" value={Date.now()} />
          <div className="create-textfield">
            <TextField
              floatingLabelText="Body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              style={{width: '100%'}}
            />
          </div>
          <div className="create-textfield">
            <TextField
              floatingLabelText="Author"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              style={{width: '100%'}}
            />
          </div>
          <CardActions>
            <FlatButton type="submit" label="Submit" secondary={true} />
          </CardActions>
        </form>
      </Card>
    )
  }
}

export default CommentCreate
