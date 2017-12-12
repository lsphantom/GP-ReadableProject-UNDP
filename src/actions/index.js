import * as APIUtils from '../utils'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_ERR = 'GET_CATEGORIES_ERR'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


// CATEGORIES
export const getCategoriesSuccess = (categories) => {
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

export const fetchCategories = () => {
	return dispatch => {
		APIUtils.fetchCategories()
			.then((data) => dispatch(getCategoriesSuccess(data.categories)))
			.catch((err) => dispatch(getCategoriesErr(err)))
	}
}

export const selectCategory = (selectCategory) => {
	return {
		type: SELECT_CATEGORY,
		selectCategory
	}
}


// POSTS
export function fetchAllPosts () {

}
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
		type: DELETE_COMMENT,
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
