import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Post from './post/Post'

class Home extends Component {
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
