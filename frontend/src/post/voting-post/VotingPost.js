import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchVotingPost } from '../action'

class VotingPost extends Component {

  handleVote = (id, voting) => {
    const option = {
      option: voting
    }
    this.props.votePost(id, JSON.stringify(option))
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <button
          onClick={() => this.handleVote(post.id, "upVote")}>
            UpVote
        </button>
        {post.voteScore}
        <button
          onClick={() => this.handleVote(post.id, "downVote")}>
            DownVote
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  votePost: (id, option) => dispatch(fetchVotingPost(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(VotingPost)
