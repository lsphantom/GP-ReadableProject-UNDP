import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchCategories, fetchAllPosts, fetchPostsInCategory } from '../actions'

import Post from './Post'

class PostList extends Component {
	state = {
		activePosts: [],
		filter: ''
	}
	render(){
		const {activePosts, filter} = this.props
		return(
			<div className="post-list">
			<h3>
				<span className="categories-label">{`${filter} `}</span>Posts
			</h3>
          	<Link to="/create-post">Add a new post &rarr;</Link>

			{ activePosts.length > 0
				? activePosts.map((post, index) =>
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
				: <p>-No posts-</p>
			}

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
		getPostsFor: (category) => dispatch(fetchPostsInCategory(category)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
