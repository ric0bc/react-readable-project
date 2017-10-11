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
    voteComment: PropTypes.func.isRequired,
    votePost: PropTypes.func.isRequired
  }

  handleVote = voting => {
    const { votePost, voteComment , postId, commentId } = this.props

    const option = { option: voting }

    if(postId) {
      votePost(postId, JSON.stringify(option))
    } else {
      voteComment(commentId, JSON.stringify(option))
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

const mapDispatchToProps = dispatch => ({
  votePost: (id, option) => dispatch(fetchVotingPost(id, option)),
  voteComment: (id, option) => dispatch(fetchVotingComment(id, option))
})

export default connect(null, mapDispatchToProps)(Voting)
