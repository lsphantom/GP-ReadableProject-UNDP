import React, { Component } from 'react';

import Post from './Post'

class PostList extends Component {
	render(){
		return(
			<div className="post-list">
				<Post />
			</div>
		)
	}
}

export default PostList;