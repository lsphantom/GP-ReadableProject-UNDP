import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreatePost extends Component {
	render(){
	return(
	<div className="create-new-post container">
		<h3>Add New Post</h3>
		<table className="post-form table-responsive">
		<tbody>
			<tr>
			<td>Category:</td>
			<td>
			<select default="react">
				<option value="react">React</option>
				<option value="redux">Redux</option>
				<option value="udacity">Udacity</option>
			</select>
			</td>
			</tr>

			<tr>
			<td>Title:</td>
			<td><input type="text" /></td>
			</tr>

			<tr>
			<td>Author:</td>
			<td><input type="text" /></td>
			</tr>

			<tr>
			<td>Post:</td>
			<td><textarea></textarea></td>
			</tr>
		</tbody>
		</table>
		<button>Submit</button>
		<Link to="/">Cancel</Link>
	</div>
	)
	}
}

export default CreatePost