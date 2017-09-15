import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAllCategories } from './actions'


class CategoryList extends Component {
  componentDidMount(){
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.category.categories.map(category => (
            <Link key={category.id} to={`/category/${category.path}`}>
              <li>
                {category.name}
              </li>
            </Link>
          ))}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = ({ posts, category })  => ({category})

const  mapDispatchToProps = (dispatch) => ({fetchCategories: () => dispatch(fetchAllCategories())})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
