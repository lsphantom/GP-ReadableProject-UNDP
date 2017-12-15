import React, {Component} from 'react';
//import {connect} from 'react-redux';
import { Link } from 'react-router-dom'


import CategoriesList from './CategoriesList'
import PostList from './PostList'
import SortBy from './SortBy'


class CategoryPage extends Component {
render (){
	return(
		<div id="home" className="container-fluid">
	        <div className="container">
	          <div className="categories-col col-sm-6">
	          <h3>Categories</h3>
	          <CategoriesList />
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

export default CategoryPage;
