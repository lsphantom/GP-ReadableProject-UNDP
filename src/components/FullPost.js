import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchCategories, fetchAllPosts, fetchPost} from '../actions'

import Post from './Post'
//import Comments from './Comments'


class FullPost extends Component {
componentDidMount(){
	//Fetch post details for a single post
	this.props.getPosts();
}
render (){
	const postID = (this.props.location.pathname).slice(7);
	return(
	<div className="full-post container">
	<Post id={postID} />
		<div className="comments-box">
		<h4>Comments</h4>
		{/*<Comments />*/}
		<a href="">Add comment</a>
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
