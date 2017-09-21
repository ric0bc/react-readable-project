import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Header from './header/header'
import CategoryView from './category-view/CategoryView'
import Post from './post/Post'
import CreateEditPost from './post/create-edit-post/CreateEditPost'
import DetailPost from './post/post-detail/PostDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <Header />
            <Post category="all" />
            <Link to="/create">
              <div className="app-create-link">
                +
              </div>
            </Link>
          </div>
        )} />
        <Route path="/category/:category" render={(props) => (
            <CategoryView {...props} />
        )} />
        <Route path="/edit/:post" component={CreateEditPost} />
        <Route path="/create" component={CreateEditPost} />
        <Route path="/post/:post" component={DetailPost} />
      </div>
    );
  }
}

export default App;
