import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

import { fetchDeletePost } from '../action'
import { deleteComments } from '../../comments/actions'

class Delete extends Component {

  handleDelete = id => {
    this.props.delete(id)
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

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(fetchDeletePost(id)),
  deleteComments: parentId => dispatch(deleteComments(parentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete)
