import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { fetchAsyncComments } from './actions'

class CommentsCount extends Component {
  static propTypes = {
    postId: PropTypes.string,
    comments: PropTypes.object,
    fetchAsyncComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchAsyncComments, postId, comments } = this.props
    if(Object.keys(comments).length <= 0) {
      fetchAsyncComments(postId)
    }
  }

  render() {
    const { reduxComments, postId } = this.props
    return (
      <div>
        Comments:
        {reduxComments[postId] instanceof Array && reduxComments[postId].length}
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ reduxComments: comments })

export default connect(mapStateToProps, {fetchAsyncComments})(CommentsCount)
