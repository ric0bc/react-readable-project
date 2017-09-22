import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import Post from './post/Post'

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <ol className="post-items">
          {this.props.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ol>
        <Link to="/create">
          <div className="app-create-link">
            +
          </div>
        </Link>
      </div>
    )
  }
}

export default Home
