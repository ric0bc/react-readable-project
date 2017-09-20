import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './header/header'
import CategoryView from './category-view/CategoryView'
import Post from './post/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <Header />
            <Post category="all" />
          </div>
        )} />
        <Route path="/category/:category" render={(props) => (
            <CategoryView {...props} />
        )} />
      </div>
    );
  }
}

export default App;
