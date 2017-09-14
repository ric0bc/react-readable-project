import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CategoryList from './category-list/CategoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <CategoryList />
          </div>
        )} />
      </div>
    );
  }
}

export default App;
