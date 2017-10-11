import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import './detail.css'
import { fetchAsyncPost } from '../action'
import Comment from '../../comments/Comment'
import CommentsCount from '../../comments/CommentsCount'
import Voting from '../../voting/Voting'
import Delete from '../delete/Delete'

class Detail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post)
  }

  render() {
    const { posts, comments, match } = this.props

    return (
      <div className="posts">
        <div className="post">
        <Card>
          <div className="detail-post-body">
            <Voting
              postId={posts.detailPost.id}
              voteScore={posts.detailPost.voteScore} />
            <div className="detail-body-main">
              <CardTitle
                title={posts.detailPost.title}
                subtitle={posts.detailPost.author}
               />
              <CardText>{posts.detailPost.body}</CardText>
              <div className="detail-body-details">
                <CommentsCount
                postId={match.params.post}
                comments={comments} />
                <CardActions>
                  <Link to={`/edit/${posts.detailPost.id}`}>
                    <FlatButton label="Edit" secondary={true} />
                  </Link>
                  <Delete
                    postId={posts.detailPost.id}
                    data={'pushHome'}
                    history={this.props.history}
                  />
                </CardActions>

                </div>
            </div>
          </div>
          <div className="detail-post-comment">
            <Comment
              postId={match.params.post}
              comments={comments} />
          </div>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsyncPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
