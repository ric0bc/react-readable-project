import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchVotingPost } from '../post/action'
import { fetchVotingComment } from '../comments/actions'

class Voting extends Component {
  static propTypes = {
    postId: PropTypes.string,
    commentId: PropTypes.string,
    voteScore: PropTypes.number.isRequired,
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
      <div>
        <button
          onClick={() => this.handleVote("upVote")}>
            UpVote
        </button>
        {this.props.voteScore}
        <button
          onClick={() => this.handleVote("downVote")}>
            DownVote
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  votePost: (id, option) => dispatch(fetchVotingPost(id, option)),
  voteComment: (id, option) => dispatch(fetchVotingComment(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(Voting)
