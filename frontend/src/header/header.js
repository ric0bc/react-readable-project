import React from 'react'
import PropTypes from 'prop-types'

import logo from '../logo.svg';
import CategoryList from '../category-list/CategoryList'

const Header = (props) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
    <CategoryList categories={props.categories} />
  </div>
)

Header.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Header
