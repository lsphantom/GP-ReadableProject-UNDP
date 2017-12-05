import React, {Component} from 'react';

class Post extends Component {
render (){
	return(
	<div className="post">
		<h4>Post Title</h4>
		<p className="post-details">Author: Name | Posted Date: -- | Comments: 0 | Current Score: 0</p>
		<div className="post-content">Post Content</div>
		<div className="post-controls">
			<span className="post-upvote"><a href="">&#8679;0 </a></span> 
			<span className="post-downvote"><a href="">&#8681;0</a></span>
			<br/>
			<span className="post-edit"><a href="">Edit</a></span> &nbsp;
			<span className="post-delete"><a href="">Delete</a></span>
		</div>
	</div>
	)
}
}

export default Post;