import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import { PropTypes } from 'prop-types'

import { sorted } from '../post/action'
import { changeSelectValue } from './action'

class Sorting extends Component {
  static propTypes = {
    changeValue: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  componentDidMount() {
    console.log(this.props.posts);
  }

  handleChange = (e) => {
    const { posts, sort, changeValue } = this.props

    posts.allPosts.sort(sortBy('-' + e.target.value))

    sort(posts.allPosts)
    changeValue(e.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="sorting">Sort by: </label>
        <select
          value={this.props.selectFieldValue.value}
          id="sorting"
          onChange={this.handleChange}>
          <option value="voteScore">Voting score</option>
          <option value="timestamp">Date</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  sort: (posts) => dispatch(sorted(posts)),
  changeValue: (value) => dispatch(changeSelectValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
