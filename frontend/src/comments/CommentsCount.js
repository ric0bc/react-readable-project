import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { fetchAsyncComments } from './actions'

class CommentsCount extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    fetchComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchComments, postId} = this.props
    fetchComments(postId)
  }

  commentsLength () {
    const { state, postId } = this.props

    const parentIdComments = state.comments[postId]
    if(parentIdComments){
      const count = Object.keys(parentIdComments).length
      return count
    }
  }

  render() {
    return (
      <div>{this.commentsLength()}</div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsCount)
