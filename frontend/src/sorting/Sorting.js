import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import { PropTypes } from 'prop-types'

import './sorting.css'
import { sorted } from '../post/action'
import { changeSelectValue } from './action'

class Sorting extends Component {
  static propTypes = {
    changeValue: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  handleChange = (e) => {
    const { posts, sort, changeValue } = this.props

    posts.allPosts.sort(sortBy('-' + e.target.value))

    sort([...posts.allPosts])
    changeValue(e.target.value)
  }

  render() {
    return (
      <div className="sorting">
        <label htmlFor="sorting">Sort by: </label>
        <select
          value={this.props.value}
          id="sorting"
          onChange={this.handleChange} >
          <option value="voteScore">Vote score</option>
          <option value="timestamp">Date</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  value: state.selectFieldValue.value
})
const mapDispatchToProps = dispatch => ({
  sort: (posts) => dispatch(sorted(posts)),
  changeValue: (value) => dispatch(changeSelectValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
