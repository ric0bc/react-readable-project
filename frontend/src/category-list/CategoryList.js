import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CategoryList = (props) => (
  <div>
    <ol>
      {props.categories.map(category => (
        <Link key={category.id} to={`/category/${category.path}`}>
          <li>
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
