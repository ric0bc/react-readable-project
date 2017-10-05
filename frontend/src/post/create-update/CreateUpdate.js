import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'

import './createUpdate.css'
import {
  fetchAsyncPost,
  fetchEditPost,
  fetchAddPost
} from '../action'

class CreateUpdate extends Component {
  state = {
    id: Date.now(),
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: '',
    disabled: ''
  }

  componentDidMount() {
    const { match, fetchPost} = this.props
    if(match.params.post){
      fetchPost(match.params.post)
        .then(() => this.setState({
          id:         this.props.posts.detailPost.id,
          title:      this.props.posts.detailPost.title,
          body:       this.props.posts.detailPost.body,
          author:     this.props.posts.detailPost.author,
          category:   this.props.posts.detailPost.category,
          disabled:   "disabled"
        })
      )
    }
  }

  handleSubmit = (event) => {
    const { match, editPost, addPost, history } = this.props

    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    const stringifiedValues = JSON.stringify(values)

    if(match.params.post){
      editPost(stringifiedValues, values.id)
    } else {
      addPost(stringifiedValues)
    }
    history.push(`/post/${values.id}`)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="posts">
        <div className="create-post-wrapper">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <input
              name="id"
              type="hidden"
              value={this.state.id}
              onChange={this.handleChange}
             />
            <input
              name="timestamp"
              type="hidden"
              value={this.state.timestamp}
              onChange={this.handleChange}
            />
            <label>
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
              Title:
            </label>
            <label>
              <textarea
                name="body"
                type="text"
                value={this.state.body}
                onChange={this.handleChange}
              />
              Body:
            </label>
            <label>
              <input
                name="author"
                type="text"
                value={this.state.author}
                onChange={this.handleChange}
                disabled={this.state.disabled}
              />
              Author:
            </label>
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              disabled={this.state.disabled}
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
  editPost: (values, id) => dispatch(fetchEditPost(values, id)),
  addPost: values => dispatch(fetchAddPost(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdate)
