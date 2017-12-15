import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'

import {fetchPost, editPost, deletePost, changeVoteScore} from '../actions'

class Post extends Component {
componentDidMount(){
	//const postID = this.props.id
	//Get post details
	//this.props.getPostByID(postID);
}
deleteThisPost = (id) => {
	console.log('delete this post', id);
	this.props.deletePost(id);
	this.props.dispatch();
}
editThisPost = (id) => {
	console.log('edit this post', id)
}

submitVote = (post, voteType) => {
 	this.props.voteOnPost(post, voteType);
	this.props.dispatch();
}

render (){
	return(
	<div className="post" id={this.props.id}>
		<h4><Link to={`/posts/${this.props.id}`}>{this.props.title}</Link></h4>
		<p className="post-details">Author: {this.props.author} | Comments: {this.props.commentCount}  | Current Score: {this.props.score}</p>
		<div className="post-content">
			<p>{this.props.content}</p>
		</div>
		<p className="post-details">Posted: {new Date(this.props.date).toDateString()} | Category: {this.props.category}</p>
		<div className="post-controls">
			<span className="post-upvote"><Link to="" onClick={() => this.submitVote(this.props.id, 'upVote')}><FaArrowUp /></Link></span>
			<span className="post-downvote"><Link to="" onClick={() => this.submitVote(this.props.id, 'downVote')}><FaArrowDown /></Link></span>
			<br/>
			<span className="post-edit"><Link to={`/posts/${this.props.id}`} onClick={() => this.editThisPost(this.props.id)}>Edit</Link></span> &nbsp;
			<span className="post-delete"><Link to="" onClick={() => this.deleteThisPost(this.props.id)}>Delete</Link></span>
		</div>
	</div>
	)
}
}

function mapStateToProps(readableApp) {
	return { readableApp }
}
function mapDispatchToProps(dispatch) {
	return{
		dispatch,
		getPostByID: (id) => dispatch(fetchPost(id)),
		deletePost: (id) => dispatch(deletePost(id)),
		editPost: (id) => dispatch(editPost(id)),
		voteOnPost: (post, voteType) => dispatch(changeVoteScore(post, voteType)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
