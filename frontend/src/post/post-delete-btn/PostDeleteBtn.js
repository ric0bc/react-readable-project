import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDeletePost } from '../action'
import { deleteComments } from '../../comments/actions'

class PostDeleteBtn extends Component {

  handleDelete = id => {
    this.props.delete(id)
    this.props.deleteComments(id)
  }

  render() {
    return (
      <button onClick={() => this.handleDelete(this.props.postId)}>
        Delete
      </button>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(fetchDeletePost(id)),
  deleteComments: parentId => dispatch(deleteComments(parentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDeleteBtn)
