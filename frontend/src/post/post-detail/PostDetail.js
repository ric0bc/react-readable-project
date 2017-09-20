import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAsnycPost } from '../action'
import Header from '../../header/header'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <div>
          <h3>{this.props.posts.detailPost.title}</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsnycPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
