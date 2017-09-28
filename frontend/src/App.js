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
import { fetchAllCategories } from './category-list/actions'

class App extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getAllPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    getAllCategories: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getAllPosts()
    this.props.getAllCategories()
  }

  render() {
    const { posts, categories } = this.props

    return (
      <div className="App">
      <Header categories={categories} />
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
  posts: state.posts.allPosts,
  categories: state.category.categories
})
const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(fetchAsyncAllPosts()),
  getAllCategories: () => dispatch(fetchAllCategories())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
