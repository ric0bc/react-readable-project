import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchVotingComment } from '../actions'

class VotingComment extends Component {

  handleVoting = (id, voting) => {
    const option = {
      option: voting
    }
    this.props.voteComment(id, JSON.stringify(option))

  }

  render() {
    const { comment } = this.props

    return (
      <div>
        <button
          onClick={() => this.handleVoting(comment.id, "upVote")}>
            UpVote
        </button>
        {comment.voteScore}
        <button
          onClick={() => this.handleVoting(comment.id, "downVote")}>
            UpVote
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  voteComment: (id, voting) => dispatch(fetchVotingComment(id, voting))
})

export default connect(mapStateToProps, mapDispatchToProps)(VotingComment)
