import * as APIUtils from '../utils'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


// CATEGORIES
export function getCategories (categories) {
	APIUtils.fetchCategories().then(data => console.log(data))

	return {
		type: GET_CATEGORIES,
		categories,
	}
}


// POSTS
export function addPost ({ id, author, date, comments, score }) {
	return {
		type: ADD_POST,
		id,
		author,
		date,
		comments,
		score,
	}
}

export function deletePost ({id}) {
	return {
		type: DELETE_POST,
		id,
	}
}

// COMMENTS
export function addComment ({id, author, date}) {
	return {
		type: ADD_COMMENT,
		id,
		author,
		date,
	}
}

export function deleteComment ({id}) {
	return {
		type: ADD_COMMENT,
		id,
	}
}


// SORTING
export function setSorting (sortingBy) {
	return {
		type: SET_SORTING,
		sortingBy,
	}
}