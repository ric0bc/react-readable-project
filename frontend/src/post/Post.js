import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchAsnycCategoryPosts,
  fetchAsnycAllPosts
} from './action'
import './post.css'

class Post extends Component {
  componentDidMount () {
    if (this.props.category === 'all'){
      this.props.fetchAllPosts()
    } else {
      this.props.fetchCategoryPosts(this.props.category)
    }
  }

  componentWillReceiveProps(prevProps) {
    if(prevProps.category !== this.props.category){
      this.props.fetchCategoryPosts(prevProps.category)
    }
  }

  render() {
    return (
      <div className="post-items">
      {this.props.posts.posts.map(post => (
        <div className="post-item" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>author: {post.author}</p>
          <div>{post.voteScore}</div>
        </div>
      ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts, category }) => ({posts})

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryPosts: (category) => dispatch(fetchAsnycCategoryPosts(category)),
  fetchAllPosts: () => dispatch(fetchAsnycAllPosts())
})

 export default connect(mapStateToProps, mapDispatchToProps)(Post)
