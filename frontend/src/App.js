import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './header/header'
import CategoryView from './category-view/CategoryView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Header />
        )} />
        <Route path="/category/:category" render={(props) => (
            <CategoryView {...props} />
        )} />
      </div>
    );
  }
}

export default App;
