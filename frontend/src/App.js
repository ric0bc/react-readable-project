import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types'

import './App.css';
import Home from './Home'
import Header from './header/header'
import CategoryPosts from './category-posts/CategoryPosts'
import CreateEditPost from './post/create-edit-post/CreateEditPost'
import DetailPost from './post/post-detail/PostDetail'
import { fetchAsyncAllPosts } from './post/action'

class App extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getAllPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div className="App">
      <Header />
        <Route
          exact
          path="/"
          render={() => <Home posts={posts} /> } />
        <Route
          path="/category/:category"
          render={(props) => <CategoryPosts {...props} posts={posts} /> } />
        <Route path="/edit/:post" component={CreateEditPost} />
        <Route path="/create" component={CreateEditPost} />
        <Route path="/post/:post" component={DetailPost} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.allPosts
})
const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(fetchAsyncAllPosts())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
