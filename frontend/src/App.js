import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (
          <Header />
        )} />
      </div>
    );
  }
}

export default App;
