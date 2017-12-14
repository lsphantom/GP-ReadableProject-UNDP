import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'

import {editPost, deletePost} from '../actions'

class Post extends Component {
deleteThisPost = (id) => {
	console.log('delete this post', id);
	this.props.deletePost(id);
	this.props.dispatch();
}
editThisPost = (id) => {
	alert('edit this post', id)
}

render (){
	return(
	<div className="post" id={this.props.id}>
		<h4>{this.props.title}</h4>
		<p className="post-details">Author: {this.props.author} | Comments: {this.props.commentCount}  | Current Score: {this.props.score}</p>
		<div className="post-content">
			<p>{this.props.content}</p>
		</div>
		<p className="post-details">Posted: {this.props.date} | Category: {this.props.category}</p>
		<div className="post-controls">
			<span className="post-upvote"><a href=""><FaArrowUp /></a></span>
			<span className="post-downvote"><a href=""><FaArrowDown /></a></span>
			<br/>
			<span className="post-edit"><span onClick={() => this.editThisPost(this.props.id)}>Edit</span></span> &nbsp;
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
		deletePost: (id) => dispatch(deletePost(id)),
		editPost: (id) => dispatch(editPost(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
