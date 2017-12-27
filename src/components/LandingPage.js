import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchCategories, fetchAllPosts, selectCategory } from '../actions'

import CategoriesList from './CategoriesList'
import PostList from './PostList'
import SortBy from './SortBy'



class LandingPage extends Component {
componentDidMount(){
  const activeFilter = this.props.match.params.category;
  if (activeFilter === undefined) {
    this.props.setCurrentCategory('all');
  } else {
    this.props.setCurrentCategory(activeFilter);
  }
}
render (){
	const {categories, filtering, posts, sortPosts} = this.props.readableApp;
  let filteredPosts = posts.filter(posts => (posts.category === filtering));
	return(
	<div id="home" className="container-fluid">
        <div className="container">
          <div className="categories-col col-sm-6">
          <h3>Categories</h3>
          <CategoriesList categories={categories} />
          <hr/>
          <h4>Sort by</h4>
          <SortBy />
          </div>
          <div className="posts-col col-sm-6">

          { (filtering !== 'all')
            ? <PostList filter={filtering} activePosts={filteredPosts} sortPostsBy={sortPosts} />
            : <PostList filter={filtering} activePosts={posts} sortPostsBy={sortPosts} />
          }
          

          </div>
        </div>
    </div>
	)
	}
}

function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    getCategories: () => dispatch(fetchCategories()),
    getPosts: () => dispatch(fetchAllPosts()),
		setCurrentCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
