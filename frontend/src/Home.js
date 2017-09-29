import React from 'react'
import { PropTypes } from 'prop-types'

import Post from './post/Post'

const Home = (props) => (
  <div className="posts">
    <ol className="post-items">
      {props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ol>
  </div>
)

Home.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Home
