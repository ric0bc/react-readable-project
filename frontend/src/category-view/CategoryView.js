import React, { Component } from 'react'

import Header from '../header/header'
import Post from '../post/Post'

class CategoryView extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post category={this.props.match.params.category} />
      </div>
    )
  }
}

export default CategoryView
