import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchCategories, fetchAllPosts, selectCategory } from '../actions'

import CategoriesList from './CategoriesList'
import PostList from './PostList'
import SortBy from './SortBy'


class LandingPage extends Component {
componentDidMount(){
	  //Fetch all categories and posts
	  this.props.getCategories();
	  this.props.getPosts();
		this.props.setCurrentCategory({category: 'all'});
	}

render (){
	const {categories} = this.props.readableApp
	return(
	<div id="home" className="container-fluid">
        <div className="container">
          <div className="categories-col col-sm-6">
          <h3>Categories</h3>
          <CategoriesList categories={categories} />
          <h4>Sort by</h4>
          <SortBy />
          </div>
          <div className="posts-col col-sm-6">
          <h3>Posts</h3>

          <Link to="/create-post">Add a new post &rarr;</Link>

          <PostList />
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
