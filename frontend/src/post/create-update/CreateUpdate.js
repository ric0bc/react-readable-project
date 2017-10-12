import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions } from 'material-ui/Card'

import './createUpdate.css'
import * as actions from '../action'
import { uniqueId } from '../../helper/Helper'

class CreateUpdate extends Component {
  state = {
    id: uniqueId(),
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: '',
    disabled: false,
    error: false,
  }

  static propTypes = {
    fetchAsyncPost: PropTypes.func.isRequired,
    fetchEditPost: PropTypes.func.isRequired,
    fetchAddPost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { match, fetchAsyncPost } = this.props
    if(match.params.post){
      fetchAsyncPost(match.params.post)
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
    const { match, fetchEditPost, fetchAddPost, history } = this.props

    event.preventDefault()

    if(this.state.category === ''){
      this.setState({error: true})
      return false
    } else {
      this.setState({error: false})
    }

    const values = serializeForm(event.target, { hash: true })
    const stringifiedValues = JSON.stringify(values)

    if(match.params.post){
      fetchEditPost(stringifiedValues, values.id)
    } else {
      fetchAddPost(stringifiedValues)
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
              className={`select-category ${this.state.error ? 'error' : ''}`}
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              <option value=""></option>
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

const mapStateToProps = ({ posts }) => ({ post: posts.detailPost })

export default connect(mapStateToProps, actions)(CreateUpdate)
