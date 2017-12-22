import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'

import {fetchPost, editPost, deletePost, changeVoteScore} from '../actions'

class Post extends Component {

deleteThisPost = (id) => {
	this.props.deletePost(id);
	this.props.history.push('/');
}

submitVote = (post, voteType) => {
 	this.props.voteOnPost(post, voteType);
}

render (){
	return(
	<div className="post" id={this.props.id}>
		<h4><Link to={`/${this.props.category}/${this.props.id}`}>{this.props.title}</Link></h4>
		<p className="post-details">Author: {this.props.author} | Comments: {this.props.commentCount}  | Current Score: {this.props.score}</p>
		<div className="post-content">
			<p>{this.props.content}</p>
		</div>
		<p className="post-details">Posted: {new Date(this.props.date).toDateString()} | Category: {this.props.category}</p>
		<div className="post-controls">
			<span className="post-upvote"><a href="" onClick={() => this.submitVote(this.props.id, 'upVote')}><FaArrowUp /></a></span>
			<span className="post-downvote"><a href="" onClick={() => this.submitVote(this.props.id, 'downVote')}><FaArrowDown /></a></span>
			<br/>
			<span className="post-edit"><Link to={`/posts/${this.props.id}`} >Edit</Link></span> &nbsp;
			<span className="post-delete"><a href="" onClick={() => this.deleteThisPost(this.props.id)}>Delete</a></span>
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
