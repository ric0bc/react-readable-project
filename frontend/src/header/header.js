import React from 'react'
import PropTypes from 'prop-types'

import './header.css'
import CategoryList from '../category-list/CategoryList'

const Header = (props) => (
  <div className="App-header">
    <CategoryList categories={props.categories} />
  </div>
)

Header.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Header
