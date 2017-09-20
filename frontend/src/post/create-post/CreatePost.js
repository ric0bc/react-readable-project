import React, { Component } from 'react'
import serializeForm from 'form-serialize'

import Header from '../../header/header'
import './createPost.css'
import * as BackendAPI from '../../utils/BackendAPI'

class CreatePost extends Component {

  handleSubmit = (event) => {
    event.preventDefault()

    const values = serializeForm(event.target, { hash: true })
    const stringifyValues = JSON.stringify(values)

    BackendAPI.addPost(stringifyValues).then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="create-post-wrapper">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <input name="id" type="hidden" value={Date.now()} />
            <input name="timestamp" type="hidden" value={Date.now()} />
            <label>
              Title:
              <input name="title" type="text" />
            </label>
            <label>
            Body:
            <textarea name="body" />
            </label>
            <label>
              Author:
              <input name="author" type="text" />
            </label>
            <select name="category">
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

export default CreatePost
