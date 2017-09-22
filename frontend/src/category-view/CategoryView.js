import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from '../post/Post'
import { fetchAsyncCategoryPosts } from '../post/action'

class CategoryView extends Component {
  componentDidMount() {
    const { getCategoryPosts, match } = this.props

    getCategoryPosts(match.params.category)
  }

  componentWillReceiveProps(prevProps) {
    if(prevProps.match.params.category !== this.props.match.params.category){
      this.props.getCategoryPosts(prevProps.match.params.category)
    }
  }

  render() {
    const { posts, match } = this.props

    return (
      <div>
        <ol className="post-items">
          {posts.map( post => (
            <Post
              key={post.id}
              category={ match.params.category }
              post={post} />
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts.categoryPosts })
const mapDispatchToProps = dispatch => ({
  getCategoryPosts: category => dispatch(fetchAsyncCategoryPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
