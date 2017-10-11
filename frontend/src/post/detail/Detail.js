import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'

import './detail.css'
import { fetchAsyncPost } from '../action'
import Comment from '../../comments/Comment'
import CommentsCount from '../../comments/CommentsCount'
import Voting from '../../voting/Voting'
import Delete from '../delete/Delete'

class Detail extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    detailPost: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post)
  }

  render() {
    const { detailPost, comments, match } = this.props

    return (
      <div className="posts">
        <div className="post">
        <Card>
          <div className="detail-post-body">
            <Voting
              postId={detailPost.id}
              voteScore={detailPost.voteScore} />
            <div className="detail-body-main">
              <CardTitle
                title={detailPost.title}
                subtitle={detailPost.author}
               />
              <CardText>{detailPost.body}</CardText>
              <div className="detail-body-details">
                <div className="comments-count">
                  <CommentsCount
                    postId={match.params.post}
                    comments={comments}
                  />
                </div>
                <CardActions>
                  <Link to={`/edit/${detailPost.id}`}>
                    <FlatButton label="Edit" secondary={true} />
                  </Link>
                  <Delete
                    postId={detailPost.id}
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

const mapStateToProps = state => ({
  comments: state.comments,
  detailPost: state.posts.detailPost
})

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchAsyncPost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
