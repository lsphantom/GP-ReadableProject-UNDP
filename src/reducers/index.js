import { combineReducers } from 'redux'
import {
	GET_CATEGORIES_SUCCESS,
	SELECT_CATEGORY,
	GET_POSTS,
	SET_SORTING,
	ADD_POST,
	DELETE_POST,
	EDIT_POST,
	} from '../actions'


function categories (state = null, action) {
	const {categories} = action
	switch (action.type){
		case GET_CATEGORIES_SUCCESS:
			return categories
		default:
			return state
	}
}

function currentCategory (state = 'all', action) {
	switch (action.type) {
		case SELECT_CATEGORY:
			return ''

		default:
			return state
	}
}

function posts (state = [], action) {
	const { post } = action

	switch (action.type){
		case GET_POSTS:
			return action.posts
		case ADD_POST:
			return {
				...state,
				...post
			}
		case DELETE_POST:
			return {
				...state,
			}
		case EDIT_POST:
			return {
				...state,
			}
		default:
			return state
	}
}

function comments (state = null, action) {
	return state
}

function sorting (state = null, action) {
	switch (action.type) {
		case SET_SORTING:
			return {
				...state,

			}
		default:
			return state
	}

}

export default combineReducers({
	categories,
	currentCategory,
	posts,
	comments,
	sorting,
})
