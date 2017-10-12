import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import { PropTypes } from 'prop-types'

import './sorting.css'
import { sorted } from '../post/action'
import { changeSelectValue } from './action'

class Sorting extends Component {
  static propTypes = {
    changeSelectValue: PropTypes.func.isRequired,
    sorted: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  handleChange = (e) => {
    const { posts, sorted, changeSelectValue } = this.props

    posts.allPosts.sort(sortBy('-' + e.target.value))

    sorted([...posts.allPosts])
    changeSelectValue(e.target.value)
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

const mapStateToProps = ({ posts, selectFieldValue }) => ({
  posts,
  value: selectFieldValue.value
})

export default connect(mapStateToProps, {sorted, changeSelectValue})(Sorting)
