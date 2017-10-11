import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions } from 'material-ui/Card'

import './createUpdate.css'
import {
  fetchAsyncPost,
  fetchEditPost,
  fetchAddPost
} from '../action'
import { uniqueId } from '../../helper/Helper'

class CreateUpdate extends Component {
  state = {
    id: uniqueId(),
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: '',
    disabled: false
  }

  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    addPost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { match, fetchPost} = this.props
    if(match.params.post){
      fetchPost(match.params.post)
        .then(() => this.setState({
          id:         this.props.post.id,
          title:      this.props.post.title,
          body:       this.props.post.body,
          author:     this.props.post.author,
          category:   this.props.post.category,
          disabled:   true
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

    if(this.state.category){
      history.push(`/${this.state.category}/${values.id}`)
    } else {
      history.push('/')
    }
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
          <Card>
          <form className="create-form" onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              name="id"
              type="hidden"
              value={this.state.id}
              onChange={this.handleChange}
             />
            <input
              className="form-control"
              name="timestamp"
              type="hidden"
              value={this.state.timestamp}
              onChange={this.handleChange}
            />
            <TextField
              floatingLabelText="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              style={styles.widthStyle}
            />
            <TextField
              floatingLabelText="Body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              style={styles.widthStyle}
            />
            <TextField
              floatingLabelText="Author"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              disabled={this.state.disabled}
              style={styles.widthStyle}
            />
            <label>Category: </label>
            <select
              className="select-category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
             <CardActions>
              <RaisedButton
                type="submit"
                label="Submit"
                secondary={true}
                style={styles.submitStyle}
              />
             </CardActions>
          </form>
          </Card>
        </div>
      </div>
    )
  }
}

const styles = {
  widthStyle: {
    'width': '100%'
  }
}

const mapStateToProps = state => ({ post: state.posts.detailPost })

const mapDispatchToProps = (dispatch) => ({
  fetchPost: postId => dispatch(fetchAsyncPost(postId)),
  editPost: (values, id) => dispatch(fetchEditPost(values, id)),
  addPost: values => dispatch(fetchAddPost(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdate)
