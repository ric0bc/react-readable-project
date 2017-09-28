import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { fetchAsyncComments } from './actions'

class CommentsCount extends Component {
  static propTypes = {
    postId: PropTypes.string,
    comments: PropTypes.object,
    fetchComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchComments, postId, comments } = this.props
    if(Object.keys(comments).length <= 0) {
      console.log('test');
      fetchComments(postId)
    }
  }

  render() {
    console.log(this.props);
    const { state, postId } = this.props
    return (
      <div>
        {state.comments[postId] instanceof Array && state.comments[postId].length}
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsCount)
