import { combineReducers } from 'redux'
import {
	GET_CATEGORIES_SUCCESS,
	SELECT_CATEGORY,
	GET_POSTS,
	SET_SORTING,
	ADD_POST,
	DELETE_POST,
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

function posts (state = null, action) {
	const { id, author, date, comments, score } = action

	switch (action.type){
		case GET_POSTS:
			return action.posts
		case ADD_POST:
			return {
				...state,
				[id]: {
					...state[id],
					[author]: null,
					[date]: null,
					[comments]: {},
					[score]: null,
				}
			}
		case DELETE_POST:
			return {
				...state,
				[id]: {
					...state[author],
					[date]: null,
				}
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
