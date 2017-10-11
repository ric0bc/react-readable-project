import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import Post from '../post/Post'
// import { fetchAsyncCategoryPosts } from './actions'
import Sorting from '../sorting/Sorting'

class CategoryPosts extends Component {
  static propTypes = {
    // getCategoryPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  }

  // If I have to use every BackendAPI Endpoint
  //
  // componentDidMount() {
  //   const { getCategoryPosts, match } = this.props
  //   getCategoryPosts(match.params.category)
  // }
  //
  // componentWillReceiveProps(prevProps) {
  //   const { getCategoryPosts, match } = this.props
  //
  //   if(prevProps.match.params.category !== match.params.category){
  //     getCategoryPosts(prevProps.match.params.category)
  //   }
  // }

  render() {
    const { posts, match } = this.props
    let categoryPosts = [];
    if(posts){
      categoryPosts = posts.filter( post => post.category === match.params.category && !post.deleted)
    }

    return (
      <div className="posts">
        <Sorting posts={categoryPosts} />
        <ol className="post-items">
          {categoryPosts.map( post => (
            <Post key={post.id} post={post} />
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts.allPosts })
// const mapDispatchToProps = dispatch => ({
//   getCategoryPosts: category => dispatch(fetchAsyncCategoryPosts(category))
// })

export default connect(mapStateToProps, null)(CategoryPosts)
