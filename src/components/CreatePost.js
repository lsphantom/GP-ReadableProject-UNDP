import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'


class CreatePost extends Component {
	state = {
		title: '',
		author: '',
		content: ''
	}
	updateInput = (inputName, inputValue) => {
		this.setState({
			[inputName]: inputValue
		})
	}

	componentDidMount(){
		this.props.getCategories();
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
			<select id="category-selector" default="react">
				{categories ? categories.map((category, index) =>
				<option key={index} value={category.name}>{category.name}</option>)
				: false}
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
		<button>Submit</button>
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
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(CreatePost)
