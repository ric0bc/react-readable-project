import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'
import Timestamp from 'react-timestamp'

import './detail.css'
import { fetchAsyncPost } from '../action'
import Comment from '../../comments/Comment'
import CommentsCount from '../../comments/CommentsCount'
import Voting from '../../voting/Voting'
import Delete from '../delete/Delete'
import NotFound from '../../not-found/NotFound'

class Detail extends Component {
  static propTypes = {
    fetchAsyncPost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    detailPost: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchAsyncPost(this.props.match.params.post)
  }

  render() {
    const { detailPost, comments, match, history } = this.props

    if(Object.keys(detailPost).length !== 0 && !detailPost.error ) {
      return (
        <div className="posts">
          <div className="post">
            <Card>
              <div className="detail-post-body">
                <Voting
                  postId={detailPost.id}
                  voteScore={detailPost.voteScore}
                />
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
                      <Timestamp time={Math.floor(detailPost.timestamp / 1000)} />
                    </div>
                    <CardActions>
                      <Link to={`/edit/${detailPost.id}`}>
                        <FlatButton label="Edit" secondary={true} />
                      </Link>
                      <Delete
                        postId={detailPost.id}
                        data={'pushHome'}
                        history={history}
                      />
                    </CardActions>
                  </div>
                </div>
              </div>
              <div className="detail-post-comment">
                <Comment
                  postId={match.params.post}
                  comments={comments}
                />
              </div>
            </Card>
          </div>
        </div>
      )
    } else {
      return <NotFound />
    }
  }
}

const mapStateToProps = ({ comments, posts }) => ({
  comments,
  detailPost: posts.detailPost
})

export default connect(mapStateToProps, {fetchAsyncPost})(Detail)
