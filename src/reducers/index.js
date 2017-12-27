import { combineReducers } from 'redux'
import {
	GET_CATEGORIES_SUCCESS,
	SET_CURRENT_CATEGORY,
	GET_POSTS,
	GET_POSTS_IN_CATEGORY,
	GET_POST_DETAILS,
	SET_POST_SORTING,
	VOTE_FOR_POST,
	SET_COMMENT_SORTING,
	ADD_POST,
	DELETE_POST,
	EDIT_POST,
	GET_COMMENTS,
	ADD_COMMENT,
	DELETE_COMMENT,
	VOTE_FOR_COMMENT,
	} from '../actions'


function categories (state = [], action) {
	const {categories} = action
	switch (action.type){
		case GET_CATEGORIES_SUCCESS:
			return [...state, ...categories]

		default:
			return state
	}
}


function posts (state = [], action) {
	const { post } = action

	switch (action.type){
		case GET_POSTS:
			return action.posts

		case GET_POST_DETAILS:
			return state

		case GET_POSTS_IN_CATEGORY:
			return action.posts

		case ADD_POST:
			return [ ...state, ...post ]

		case DELETE_POST:
			return [ ...state, ...post ]

		case EDIT_POST:
			return [ ...state, ...post ]

		case VOTE_FOR_POST:
			return [ ...state, ...post ]

		default:
			return state
	}
}




function filtering (state = '', action) {
	//const {category} = action;
	switch (action.type) {
		case SET_CURRENT_CATEGORY:
			return action.category

		default:
			return state
	}
}




function comments (state = [], action) {
	const {comments, comment} = action
	switch (action.type) {
		case GET_COMMENTS:
			return comments

		case ADD_COMMENT:
			return [...state, comments]

		case DELETE_COMMENT:
      		return [...state, ...comment]

      	case VOTE_FOR_COMMENT:
      		return [...state, ...comment]

		default:
			return state
	}
}



function sortPosts (state = '', action) {
	switch (action.type) {
		case SET_POST_SORTING:
			return action.sortingBy

		default:
			return state
	}
}



function sortComments (state = null, action) {
	switch (action.type) {
		case SET_COMMENT_SORTING:
			return state

		default:
			return state
	}
}

export default combineReducers({
	categories,
	posts,
	filtering,
	comments,
	sortPosts,
	sortComments,
})
