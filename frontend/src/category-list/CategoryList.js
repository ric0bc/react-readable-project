import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

import './category-list.css'

const CategoryList = (props) => (
  <div>
    <h2 className="head-title">Categories</h2>
    <ol className="category-list">
      <Link to={`/`}>
        <li className="category-item">
          <RaisedButton label="all" secondary={true} />
        </li>
      </Link>
      {props.categories.map(category => (
        <Link key={category.id} to={`/category/${category.path}`}>
          <li className="category-item">
            <RaisedButton label={category.name} secondary={true} />
          </li>
        </Link>
      ))}
    </ol>
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryList
