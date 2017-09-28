import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import './post.css'
import CommentsCount from '../comments/CommentsCount'

const Post = (props) =>  (
  <li className="post-item" key={props.post.id}>
    <Link to={`/post/${props.post.id}`}>
      <h3>{props.post.title}</h3>
    </Link>
    <p>{props.post.body}</p>
    <p>author: {props.post.author}</p>
    <div>{props.post.voteScore}</div>
    <Link to={`/edit/${props.post.id}`}>Edit</Link>
    <CommentsCount postId={props.post.id} comments={{}}/>
  </li>
)

Post.propTypes = {
  post: PropTypes.object.isRequired
}

 export default Post
