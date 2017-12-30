import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCategories,
				fetchAllPosts,
				fetchPost,
				deletePost,
				editPost,
				changeVoteScore,
				fetchComments,
				addComment,
				editComment} from '../actions'
import ReactModal from 'react-modal'
import Post from './Post'
import Comment from './Comment'
const uuidv1 = require('uuid/v1');


class FullPost extends Component {
state = {
	id: '',
	title: '',
	body: '',
	showModal: false,
	commentId: '',
	commentBody: '',
	commentAuthor: '',
}
updateInput = (inputName, inputValue) => {
	this.setState( {[inputName]: inputValue} )
}
postComment = (event) => {
	//Create comment
	let newComment = {
		id: uuidv1(),
		parentId: this.state.id,
		timestamp: Date.now(),
		body: this.state.commentBody,
		author: this.state.commentAuthor,
		voteScore: 0,
		deleted: false,
		parentDeleted: false,
	}
	//Dispatch actions
	this.props.addComment(newComment);
	this.props.getPosts();
	this.props.getComments(this.state.id);
	this.clearCommentInput(event);
}
submitCommentChanges = (id, event) => {
	//Create comment
	let changedComment = {
		id,
		parentId: this.state.id,
		timestamp: Date.now(),
		body: this.state.commentBody,
		author: this.state.commentAuthor,
		deleted: false,
		parentDeleted: false,
	}
	//Dispatch actions
	this.props.editComment(id, changedComment);
	this.props.getPosts();
	this.props.getComments(this.state.id);
	this.clearCommentInput(event);
	this.handleCloseModal();
}
clearCommentInput = (event) => {
	this.setState({
		commentId: '',
		commentBody: '',
		commentAuthor: '',
	});
	this.props.history.push();
}
handleOpenModal = (id, body, author) => {
    this.setState({ showModal: true,
    				commentId: id,
    				commentBody: body,
    				commentAuthor: author, 
    			});
}
  
handleCloseModal = () => {
    this.setState({ showModal: false, 
    				commentId: '',
    				commentBody: '',
    				commentAuthor: '',
    			});
}
componentWillMount(){
	//Fetch post details for a single post
	const postID = this.props.match.params.post_id;
	if (postID !== '') {
		this.setState({id: postID});
		this.props.getPostByID(postID)
			.then(data => this.setState(data.post));
		this.props.getComments(postID);
	} else {
		console.log('Error: Post ID not available!');
	}
}

render (){
	const {body, title} = this.state;
 	const {comments} = this.props.readableApp;

	return(
	<div className="full-post container">
		<div className="detailed-post">
		{ body !== '' || title !== ''
			? <Post
				id={this.state.id}
				title={this.state.title}
				author={this.state.author}
				content={this.state.body}
				category={this.state.category}
				date={this.state.timestamp}
				commentCount={this.state.commentCount}
				score={this.state.voteScore} />
			: <div className="notFound-post">
				<p className="oops-text">Oops, no post found.</p>
				<Link to="/">&larr; Return to main page</Link>
			  </div>
		}

		</div>



		<div className="comments-box">


		{  body !== '' || title !== ''
			? <div> 
				<h4>Comments</h4>
				<div className="add-comment">
				<input type="text"
						id="commentBody"
						value={this.state.commentBody}
						placeholder="Add a comment..."
						className="comment-body-input form-control"
						onChange={event => (this.updateInput(event.target.id, event.target.value))} />
				<input type="text"
						id="commentAuthor"
						value={this.state.commentAuthor}
						placeholder="Your name..."
						className="comment-author-input form-control"
						onChange={event => (this.updateInput(event.target.id, event.target.value))} />
				<input type="submit"
						value="Post Comment"
						onClick={(event) => this.postComment(event)} />
				</div>
			</div>
			: null
		}

		{ 
		  Array.isArray(comments)  && comments.length > 0
		  ? comments.map((comment, index) => 
			<Comment key={index}
						parentId={comment.parentId}
						id={comment.id}
						content={comment.body}
						author={comment.author}
						score={comment.voteScore}
						edit={this.handleOpenModal} /> )
			: <p>-No comments-</p>
		}
		
		</div>


		<ReactModal 
			isOpen={this.state.showModal}
			contentLabel="Minimal modal examle"
			ariaHideApp={false}>
			<div className="modal-body">
			<button className="modal-close" onClick={this.handleCloseModal}>X</button>
			<h4>Edit Comment</h4>
			<p className="comment-id">ID: {this.state.commentId}</p>
				<div className="add-comment">
				Comment: 
				<input type="text"
						id="commentBody"
						value={this.state.commentBody}
						className="comment-body-input form-control"
						onChange={event => (this.updateInput(event.target.id, event.target.value))} />
				Author: 
				<input type="text"
						id="commentAuthor"
						value={this.state.commentAuthor}
						className="comment-author-input form-control"
						onChange={event => (this.updateInput(event.target.id, event.target.value))} />
				<input type="submit"
						value="Submit Changes"
						onClick={(event) => this.submitCommentChanges(this.state.commentId, event)} />
				</div>
			</div>
        </ReactModal>
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
	editComment: (id, comment) => dispatch(editComment(id, comment)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
