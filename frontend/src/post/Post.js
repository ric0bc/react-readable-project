import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Timestamp from 'react-timestamp'
import FlatButton from 'material-ui/FlatButton'

import './post.css'
import CommentsCount from '../comments/CommentsCount'
import Voting from '../voting/Voting'
import Delete from './delete/Delete'

const Post = (props) =>  (
  <li className="post-item" key={props.post.id} >
    <Voting postId={props.post.id} voteScore={props.post.voteScore} />
    <div className="post-content">
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <p className="post-title">{props.post.title}</p>
      </Link>
      <p className="post-body">{props.post.body}</p>
      <div className="post-sub-details">
        <p className="post-author">Author: {props.post.author}</p>
        <div className="post-comments">
          <CommentsCount postId={props.post.id} comments={{}}/>
        </div>
        <p className="post-timestamp">
          <Timestamp time={Math.floor(props.post.timestamp / 1000)} />
        </p>
      </div>
    </div>
    <div className="post-details">
      <Link to={`/edit/${props.post.id}`}>
        <FlatButton label="Edit" secondary={true} />
      </Link>
      <Delete postId={props.post.id}/>
    </div>
  </li>
)

Post.propTypes = {
  post: PropTypes.object.isRequired
}

 export default Post
