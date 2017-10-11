import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Post from '../../post/Post'
import Sorting from '../../sorting/Sorting'

const Home = (props) => (
  <div className="posts">
    <Link to="/create">
      <FloatingActionButton secondary={true} style={styles}>
        <ContentAdd />
      </FloatingActionButton>
    </Link>
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

const styles = {
  position: 'absolute',
  bottom: 15,
  right: 15
}

export default Home
