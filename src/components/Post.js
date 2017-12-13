import React, {Component} from 'react'
import {connect} from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'

import {editPost, deletePost} from '../actions'

class Post extends Component {
deleteThisPost = (id) => {

}
editThisPost = (id) => {

}

render (){
	return(
	<div className="post" id={this.props.id}>
		<h4>{this.props.title}</h4>
		<p className="post-details">Author: {this.props.author} | {/*Posted Date: {this.props.date} |*/} Comments: {this.props.commentCount}  | Current Score: {this.props.score}</p>
		<div className="post-content">{this.props.content}</div>
		<div className="post-controls">

			<span className="post-upvote"><a href=""><FaArrowUp /></a></span>
			<span className="post-downvote"><a href=""><FaArrowDown /></a></span>
			<br/>
			<span className="post-edit"><a href="">Edit</a></span> &nbsp;
			<span className="post-delete"><a href="">Delete</a></span>
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
