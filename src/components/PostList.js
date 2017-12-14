import React, { Component } from 'react';
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import { fetchCategories, fetchAllPosts } from '../actions'

import Post from './Post'

class PostList extends Component {

	render(){
		const {posts} = this.props.readableApp
		return(
			<div className="post-list">
				{Array.isArray(posts) ? posts.map((post, index) =>
				<Post
					key={index}
					id={post.id}
					title={post.title}
					author={post.author}
					content={post.body}
					category={post.category}
					date={post.timestamp}
					commentCount={post.commentCount}
					score={post.voteScore} />)
				: false}
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
