import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { fetchAsyncComments } from './actions'
import CommentsCount from './CommentsCount'

class Comment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    fetchComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchComments, postId} = this.props
    fetchComments(postId)
  }

  render() {
    return (
      <div>
        <CommentsCount postId={this.props.postId}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
