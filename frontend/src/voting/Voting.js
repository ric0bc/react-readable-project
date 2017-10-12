import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AngleUp from 'react-icons/lib/fa/angle-up'
import AngleDown from 'react-icons/lib/fa/angle-down'

import './voting.css'
import { fetchVotingPost } from '../post/action'
import { fetchVotingComment } from '../comments/actions'

class Voting extends Component {
  static propTypes = {
    postId: PropTypes.string,
    commentId: PropTypes.string,
    voteScore: PropTypes.number,
    fetchVotingComment: PropTypes.func.isRequired,
    fetchVotingPost: PropTypes.func.isRequired
  }

  handleVote = voting => {
    const { fetchVotingPost, fetchVotingComment , postId, commentId } = this.props

    const option = { option: voting }

    if(postId) {
      fetchVotingPost(postId, JSON.stringify(option))
    } else {
      fetchVotingComment(commentId, JSON.stringify(option))
    }
  }

  render() {
    return (
      <div className="voting">
        <AngleUp
          className="btn-vote up-vote"
          onClick={() => this.handleVote("upVote")} />
        <p className="vote-score">{this.props.voteScore}</p>
        <AngleDown
          className="btn-vote down-vote"
          onClick={() => this.handleVote("downVote")} />
      </div>
    )
  }
}

export default connect(null, {fetchVotingPost, fetchVotingComment})(Voting)
