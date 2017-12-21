import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchCategories,
				fetchAllPosts,
				fetchPost,
				deletePost,
				editPost,
				changeVoteScore,
				fetchComments} from '../actions'

import Post from './Post'


class FullPost extends Component {
state = {
	id: ''
}

componentWillMount(){
	//Fetch post details for a single post
	const postID = this.props.match.params.post_id;
	if (postID !== '') {
		this.setState({id: postID});
		this.props.getPostByID(this.state.id);
		this.props.getComments('b82f3d47-4276-4fca-b410-0b2bf2aed093');
	} else {
		console.log('Error: No post ID available!');
	}
}

render (){
	const allPosts = this.props.readableApp.posts;
	const matchID = this.state.id;
	return(
	<div className="full-post container">
		<div className="detailed-post">
		{ Array.isArray(allPosts)
			? allPosts.filter(post => post.id === matchID).map((post, index) =>
					<Post key={index}
								id={post.id}
								title={post.title}
								author={post.author}
								content={post.body}
								category={post.category}
								date={post.timestamp}
								commentCount={post.commentCount}
								score={post.voteScore} />)
			: <p>No post found.</p>
		}

		</div>
		<div className="comments-box">
		<h4>Comments</h4>
		{/*<CommentList />*/}
		<a href="">Add comment &rarr;</a>
		<div className="comment">
			<p>Comment Title</p>
			<p>Comment details</p>
			<p>Comment body</p>
		</div>

		<div className="comment">
			<p>Comment Title</p>
			<p>Comment details</p>
			<p>Comment body</p>
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
		getPostByID: (id) => dispatch(fetchPost(id)),
		deletePost: (id) => dispatch(deletePost(id)),
		editPost: (id) => dispatch(editPost(id)),
		voteOnPost: (post, voteType) => dispatch(changeVoteScore(post, voteType)),
		getComments: (id) => dispatch(fetchComments(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
