import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import Post from '../post/Post'
import { fetchAsyncCategoryPosts } from './actions'

class CategoryPosts extends Component {
  static propTypes = {
    getCategoryPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { getCategoryPosts, match } = this.props

    getCategoryPosts(match.params.category)
  }

  componentWillReceiveProps(prevProps) {
    const { getCategoryPosts, match } = this.props

    if(prevProps.match.params.category !== match.params.category){
      getCategoryPosts(prevProps.match.params.category)
    }
  }

  render() {
    const { posts, match } = this.props

    return (
      <div className="posts">
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

const mapStateToProps = state => ({ posts: state.categoryPosts.posts })
const mapDispatchToProps = dispatch => ({
  getCategoryPosts: category => dispatch(fetchAsyncCategoryPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPosts)
