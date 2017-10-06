import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions } from 'material-ui/Card'

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
    disabled: false
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
    history.push(`/post/${values.id}`)
  }

  handleChange = (e) => {
    console.log(e.target.value);
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
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              style={styles.widthStyle}
            />
            <TextField
              floatingLabelText="Body"
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              style={styles.widthStyle}
            />
            <TextField
              floatingLabelText="Author"
              className="form-control"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              disabled={this.state.disabled}
              style={styles.widthStyle}
            />
            <SelectField
              floatingLabelText="Category"
              className="form-control"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              disabled={this.state.disabled}
              style={styles.widthStyle}
            >
              <MenuItem value="react" primaryText="react" />
              <MenuItem value="redux" primaryText="redux" />
              <MenuItem value="udacity" primaryText="udacity" />
            </SelectField>
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

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  fetchPost: postId => dispatch(fetchAsyncPost(postId)),
  editPost: (values, id) => dispatch(fetchEditPost(values, id)),
  addPost: values => dispatch(fetchAddPost(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdate)
