import React, { Component } from 'react'

class CommentsCount extends Component {

  commentsLength () {
    const { comments, postId } = this.props

    const parentIdComments = comments[postId]
    if(parentIdComments){
      const count = Object.keys(parentIdComments).length
      return count
    }
  }

  render() {
    return (
      <div>{this.commentsLength()}</div>
    )
  }
}

export default CommentsCount
