import React, {Component} from 'react';

class Post extends Component {
render (){
	return(
	<div className="post" id={this.props.id}>
		<h4>{this.props.title}</h4>
		<p className="post-details">Author: {this.props.author} | {/*Posted Date: {this.props.date} |*/} Comments: {this.props.commentCount} | Current Score: {this.props.score}</p>
		<div className="post-content">{this.props.content}</div>
		<div className="post-controls">
			<span className="post-upvote"><a href="">&#8679; </a></span>
			<span className="post-downvote"><a href="">&#8681;</a></span>
			<br/>
			<span className="post-edit"><a href="">Edit</a></span> &nbsp;
			<span className="post-delete"><a href="">Delete</a></span>
		</div>
	</div>
	)
}
}

export default Post;
