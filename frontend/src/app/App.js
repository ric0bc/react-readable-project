import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types'

import './App.css';
import Sidebar from './sidebar/Sidebar'
import Home from './home/Home'
import Header from './header/Header'
import CategoryPosts from '../category-posts/CategoryPosts'
import CreateUpdate from '../post/create-update/CreateUpdate'
import Detail from '../post/detail/Detail'
import { fetchAsyncAllPosts } from '../post/action'
import { fetchAllCategories } from '../category-list/actions'

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
        <Sidebar />
        <div className="main-content">
          <Header categories={categories} />
          <Route
            exact
            path="/"
            render={() => <Home posts={posts} /> } />
          <Route path="/category/:category"  component={CategoryPosts} />
          <Route path="/create" component={CreateUpdate} />
          <Route path="/edit/:post" component={CreateUpdate} />
          <Route path="/post/:post" component={Detail} />
        </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)