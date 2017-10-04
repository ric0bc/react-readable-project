import React from 'react'
import { PropTypes } from 'prop-types'

import Post from './post/Post'
import Sorting from './sorting/Sorting'

const Home = (props) => (
  <div className="posts">
    <Sorting posts={props.posts} />
    <ol className="post-items">
      {props.posts.filter(post => !post.deleted ).map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ol>
  </div>
)

Home.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Home
