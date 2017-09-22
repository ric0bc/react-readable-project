import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchAsyncComments
} from './actions'

class Comment extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  render() {

    let p = this.props.comments.parentIdComments.map(t => t[this.props.postId])

    console.log(p);
    console.log(this.props);
    return (
      <div>
      {this.props.comments.comments.length}
      </div>
    )
  }
}

const mapStateToProps = state => ({ comments: state.comments })

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
