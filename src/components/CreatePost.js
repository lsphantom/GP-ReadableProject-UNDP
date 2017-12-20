import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories, fetchAllPosts, addPost } from '../actions'
const uuidv4 = require('uuid/v4');

class CreatePost extends Component {
	state = {
		title: '',
		author: '',
		content: '',
		category: 'react'
	}
	updateInput = (inputName, inputValue) => {
		this.setState({
			[inputName]: inputValue
		})
	}
	submitPost = (event) => {
		event.preventDefault()
		const {title, author, content, category} = this.state
		const newPost = {
			id: uuidv4(),
			timestamp: Date.now(),
			title,
			body: content,
			author,
			category,
			voteScore: 0,
			deleted: false,
			commentCount: 0
		}
		this.props.submitPost(newPost);
		this.props.history.push('/');
		this.props.getPosts();
	}

	render(){
	const {categories} = this.props.readableApp;
	return(
	<div className="create-new-post container">
		<h3>Add New Post</h3>
		<table className="post-form table-responsive">
		<tbody>
			<tr>
			<td>Category:</td>
			<td>
			<select id="category"
							value={this.state.category}
							onChange={event => (this.updateInput(event.target.id, event.target.value))}>
				{categories ? categories.map((category, index) =>
				<option key={index} value={category.name}>{category.name}</option>)
				: <option>No categories</option>}
			</select>
			</td>
			</tr>

			<tr>
			<td>Title:</td>
			<td>
				<input id="title"
							 type="text"
							 value={this.state.title}
							 onChange={event => (this.updateInput(event.target.id, event.target.value))} />
			</td>
			</tr>

			<tr>
			<td>Author:</td>
			<td>
				<input id="author"
							 type="text"
							 value={this.state.author}
							 onChange={event => (this.updateInput(event.target.id, event.target.value))} />
			</td>
			</tr>

			<tr>
			<td>Post:</td>
			<td>
			<textarea id="content"
								value={this.state.content}
								onChange={event => (this.updateInput(event.target.id, event.target.value))} >
			</textarea>
			</td>
			</tr>
		</tbody>
		</table>
		<input type="submit" value="Submit" onClick={event => this.submitPost(event)} />
		<Link to="/">Cancel</Link>
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
		submitPost: (data) => dispatch(addPost(data)),
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(CreatePost)
