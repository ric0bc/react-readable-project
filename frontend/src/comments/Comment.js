import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAsyncComments } from './actions'
import CommentsCount from './CommentsCount'

class Comment extends Component {
  componentDidMount() {
    const { fetchComments, postId} = this.props

    fetchComments(postId)
  }

  render() {
    return (
      <div>
        <CommentsCount postId={this.props.postId} comments={this.props.state.comments}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
