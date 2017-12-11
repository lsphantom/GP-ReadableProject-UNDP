import * as APIUtils from '../utils'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES'
export const GET_CATEGORIES_ERR = 'GET_CATEGORIES_ERR'
export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


// CATEGORIES
export function getCategoriesSuccess (categories) {
	return {
		type: GET_CATEGORIES_SUCCESS,
		categories
	}
}

export function getCategoriesErr (err) {
	return {
		type: GET_CATEGORIES_ERR,
		err
	}
}

export function fetchCategories() {
	const data = APIUtils.fetchCategories()

	return dispatch => {
		data.then((data) => {
			dispatch(getCategoriesSuccess(data.categories))
		}).catch(err => dispatch(getCategoriesErr(err)))
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