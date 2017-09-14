import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAllCategories } from './actions'


class Category extends Component {
  componentDidMount(){
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.categories.map(category => (
            //TODO: Add Key property to <a>
            <a href={category.path}>
              <li>
                {category.name}
              </li>
            </a>
          ))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps (categories) {
  return categories
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
