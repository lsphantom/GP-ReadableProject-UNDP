import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchCategories, fetchAllPosts, fetchPostsInCategory } from '../actions'
import sortBy from 'sort-by'

import Post from './Post'

class PostList extends Component {

	render(){
		const {activePosts, filter, sortPostsBy} = this.props;
		let sortedPosts = [];

		//Sort if possible
		if ( Array.isArray(activePosts) && (activePosts.length > 0 ) ) {
			switch (sortPostsBy) {
				case 'date_+':
					sortedPosts = activePosts.sort(sortBy('timestamp'));
					break;
				case 'date_-':
					sortedPosts = activePosts.sort(sortBy('-timestamp'));
					break;
				case 'score_+':
					sortedPosts = activePosts.sort(sortBy('-voteScore'));
					break;
				case 'score_-':
					sortedPosts = activePosts.sort(sortBy('voteScore'));
					break;
				default:
					sortedPosts = activePosts;
			}
		}

		return(
			<div className="post-list">
			<h3>
				<span className="categories-label">{`${filter} `}</span>Posts
			</h3>
          	<Link to="/create-post">Add a new post &rarr;</Link>

			{	
				sortedPosts.length > 0
				? sortedPosts.map((post, index) =>
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
