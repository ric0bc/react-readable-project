import React, { Component } from 'react'

import logo from '../logo.svg';
import CategoryList from '../category-list/CategoryList'

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
    <CategoryList />
  </div>
)

export default Header
