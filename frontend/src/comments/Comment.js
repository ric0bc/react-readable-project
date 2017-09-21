import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchAsyncComments
} from './action'

class Comment extends Component {
  componentDidMount() {
    console.log(this.props.fetchComments(this.props.posts.detailPost.id));
    console.log('props', this.props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>Test</div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (disptach) => ({
  fetchComments: id => disptach(fetchAsyncComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
