import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../actions'

class CategoriesList extends Component {
componentDidMount(){
  //Fetch all categories and posts
  this.props.getCategories();
  this.props.getPosts();
}

render (){
  const {categories} = this.props.readableApp
	return (
	<ul className="categories-list">
		<li className="active">
      <Link to="/">all</Link>
    </li>
		{categories ? categories.map((category, index) =>
		<li key={index}>
      <Link id={category.name} to={`/${category.name}`}>{category.name}</Link>
    </li>)
    : false}
	</ul>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
