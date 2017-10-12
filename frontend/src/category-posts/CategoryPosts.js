import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import Post from '../post/Post'
import Sorting from '../sorting/Sorting'

class CategoryPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  }

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

const mapStateToProps = ({ posts }) => ({ posts: posts.allPosts })

export default connect(mapStateToProps, null)(CategoryPosts)
