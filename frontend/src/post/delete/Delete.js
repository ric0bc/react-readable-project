import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

import { fetchDeletePost } from '../action'
import { deleteComments } from '../../comments/actions'

class Delete extends Component {

  handleDelete = id => {
    this.props.fetchDeletePost(id)
    this.props.deleteComments(id)
    if(this.props.data === 'pushHome'){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <FlatButton
        label="Delete"
        secondary={true}
        onClick={() => this.handleDelete(this.props.postId)}
       />
    )
  }
}

export default connect(null, {fetchDeletePost, deleteComments})(Delete)
