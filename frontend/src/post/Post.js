import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAsnycCategoryPosts } from './action'

class Post extends Component {
  componentDidMount () {
    this.props.fetchCategoryPosts(this.props.category)
  }

  componentWillReceiveProps(prevProps) {
    if(prevProps.category !== this.props.category){
      this.props.fetchCategoryPosts(this.props.category)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
      {this.props.posts.categoryPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>author: {post.author}</p>
        </div>
      ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts, category }) => ({posts})

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryPosts: (category) => dispatch(fetchAsnycCategoryPosts(category))
})

 export default connect(mapStateToProps, mapDispatchToProps)(Post)
