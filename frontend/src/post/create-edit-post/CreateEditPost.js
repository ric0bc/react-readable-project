import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'

import Header from '../../header/header'
import './createPost.css'
import * as BackendAPI from '../../utils/BackendAPI'
import {
  fetchAsyncPost,
  changeTitleInput,
  changeBodyInput,
  changeAuthorInput,
  changeCategoryValue,
  changeTimestampInput,
  changeIdInput,
  resetDetailPost
} from '../action'

class CreateEditPost extends Component {
  componentDidMount() {
    if(this.props.match.params.post){
      this.props.fetchPost(this.props.match.params.post)
    } else {
      this.props.onResetDetailPost()
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    const stringifyValues = JSON.stringify(values)

    if(this.props.match.params.post){
      console.log('test')
    } else {
      BackendAPI.addPost(stringifyValues).then(() => {
      })
    }
    this.props.history.push('/')
  }

  render() {
    const {
      posts,
      onChangeId,
      onChangeTimestamp,
      onChangeTitle,
      onChangeBody,
      onChangeAuthor,
      onChangeCategory
    } = this.props

    return (
      <div>
        <Header />
        <div className="create-post-wrapper">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <input
              name="id"
              type="hidden"
              value={ posts.detailPost.id || Date.now() }
              onChange={(e) => onChangeId(e.target.value)}
             />
            <input
              name="timestamp"
              type="hidden"
              value={ posts.detailPost.timestamp || Date.now()}
              onChange={(e) => onChangeTimestamp(e.target.value)}
            />
            <label>
              Title:
              <input
                name="title"
                type="text"
                value={ posts.detailPost.title || '' }
                onChange={(e) => onChangeTitle(e.target.value)}
              />
            </label>
            <label>
              Body:
            <textarea
              name="body"
              type="text"
              value={ posts.detailPost.body || '' }
              onChange={(e) => onChangeBody(e.target.value)}
            />
            </label>
            <label>
              Author:
              <input
                name="author"
                type="text"
                value={ posts.detailPost.author || '' }
                onChange={(e) => onChangeAuthor(e.target.value)}
              />
            </label>
            <select
              name="category"
              value={ posts.detailPost.category || '' }
              onChange={(e) => onChangeCategory(e.target.value)}
            >
              <option value="..."></option>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: postId => dispatch(fetchAsyncPost(postId)),
  onChangeTitle: (title) => dispatch(changeTitleInput(title)),
  onChangeBody: (body) => dispatch(changeBodyInput(body)),
  onChangeAuthor: (author) => dispatch(changeAuthorInput(author)),
  onChangeCategory: (category) => dispatch(changeCategoryValue(category)),
  onChangeTimestamp: (timestamp) => dispatch(changeTimestampInput(timestamp)),
  onChangeId: (id) => dispatch(changeIdInput(id)),
  onResetDetailPost: () => dispatch(resetDetailPost())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPost)