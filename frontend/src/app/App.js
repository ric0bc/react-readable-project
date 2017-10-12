import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types'
import sortBy from 'sort-by'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.css';
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
    fetchAsyncAllPosts: PropTypes.func.isRequired,
    fetchAllCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    sortingValue: PropTypes.string
  }

  componentDidMount() {
    const { fetchAsyncAllPosts, fetchAllCategories } = this.props
    fetchAsyncAllPosts()
    fetchAllCategories()
  }

  render() {
    const { posts, categories, sortingValue } = this.props

    let allPosts = posts instanceof Array ? posts
      .filter(post => !posts.deleted).sort(sortBy('-' + sortingValue)) : []

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="main-content">
            <Header categories={categories} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home posts={allPosts} /> }
              />
              <Route path="/create" component={CreateUpdate} />
              <Route exact path="/:category"  component={CategoryPosts} />
              <Route path="/edit/:post" component={CreateUpdate} />
              <Route path="/:category/:post" component={Detail} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ posts, category, selectFieldValue }) => ({
  posts: posts.allPosts,
  categories: category.categories,
  sortingValue: selectFieldValue.value
})

export default withRouter(
  connect(
    mapStateToProps,
    {fetchAsyncAllPosts, fetchAllCategories}
  )(App)
)
