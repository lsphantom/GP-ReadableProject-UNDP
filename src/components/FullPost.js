import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCategories,
				fetchAllPosts,
				fetchPost,
				deletePost,
				editPost,
				changeVoteScore,
				fetchComments,
				addComment} from '../actions'

import Post from './Post'
import Comment from './Comment'
const uuidv1 = require('uuid/v1');


class FullPost extends Component {
state = {
	id: '',
	cid: '',
	cpid: '',
	ctimestamp: 0,
	cbody: '',
	cauthor: '',
	cvotescore: 0,
	cdeleted: false,
	cparentdeleted: false,
}
updateInput = (inputName, inputValue) => {
	this.setState({
		[inputName]: inputValue
	})
}
postComment = (event) => {
	//Create comment
	let newComment = {
		id: uuidv1(),
		parentId: this.state.cpid,
		timestamp: Date.now(),
		body: this.state.cbody,
		author: this.state.cauthor,
		voteScore: this.state.cvotescore,
		deleted: this.state.cdeleted,
		parentDeleted: this.state.cparentdeleted,
	}
	console.log(newComment);
	this.props.addComment(newComment);
	this.props.getPosts();
	this.props.getComments(this.state.id);
	this.clearCommentInput(event);
}
clearCommentInput = (event) => {
	this.setState({
		cid: '',
		ctimestamp: 0,
		cbody: '',
		cauthor: '',
		cvotescore: 0,
		cdeleted: false,
		cparentdeleted: false,
	});
	this.props.history.push();
}
componentWillMount(){
	//Fetch post details for a single post
	const postID = this.props.match.params.post_id;
	if (postID !== '') {
		this.setState({id: postID, cpid: postID});
		this.props.getPostByID(this.state.id);
		this.props.getComments(postID);
	} else {
		console.log('Error: No post ID available!');
	}
}

render (){
	const allPosts = this.props.readableApp.posts;
	const matchID = this.state.id;

	const {comments} = this.props.readableApp;

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
		
		<div className="add-comment">
		<input type="text"
				id="cbody"
				value={this.state.cbody}
				placeholder="Add a comment..."
				className="comment-body-input form-control"
				onChange={event => (this.updateInput(event.target.id, event.target.value))} />
		<input type="text"
				id="cauthor"
				value={this.state.cauthor}
				placeholder="Your name..."
				className="comment-author-input form-control"
				onChange={event => (this.updateInput(event.target.id, event.target.value))} />
		<input type="submit"
				value="Post Comment"
				onClick={(event) => this.postComment(event)} />
		{/*<a href="" onClick={(event) => this.clearCommentInput(event)}>Cancel</a>*/}
		</div>



		{ Array.isArray(comments) && comments.length > 0
			? comments.map((comment, index) => 
			<Comment key={index}
						parentId={comment.parentId}
						id={comment.id}
						content={comment.body}
						author={comment.author}
						score={comment.voteScore} /> )
			: <p>-No comments-</p>
		}
		


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
	addComment: (comment) => dispatch(addComment(comment)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
