import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './category-list.css'

const CategoryList = (props) => (
  <div>
    <h2 className="head-title">Categories</h2>
    <ol className="category-list">
      {props.categories.map(category => (
        <Link key={category.id} to={`/category/${category.path}`}>
          <li className="category-item btn">
            {category.name}
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
