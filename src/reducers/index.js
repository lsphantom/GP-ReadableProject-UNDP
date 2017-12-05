import { combineReducers } from 'redux'
import {
	GET_CATEGORIES,
	GET_POSTS,
	SET_SORTING,
	ADD_POST,
	DELETE_POST,
	} from '../actions'


function readableCategories (state = null, action) {
	switch (action.type){
		case GET_CATEGORIES:
			return action.categories
		
		default:
			return state
	}
}

function readablePosts (state = null, action) {
	const { id, author, date, comments, score } = action

	switch (action.type){
		case GET_POSTS:
			return {
				...state,

			}
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

function readableComments (state = null, action) {
	return state
}

function readableSorting (state = null, action) {
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
	readableCategories,
	readablePosts,
	readableComments,
	readableSorting,
})