import * as APIUtils from '../utils'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


// CATEGORIES
export const fetchCategories = () => dispatch =>
	APIUtils.fetchCategories()
	.then(categories => dispatch(getCategoriesSuccess(categories))
)

export const getCategoriesSuccess = categories => ({
		type: GET_CATEGORIES_SUCCESS,
		categories
})

export const selectCategory = (selectCategory) => {
	return {
		type: SELECT_CATEGORY,
		selectCategory
	}
}


// POSTS
export const fetchAllPosts = () => dispatch =>
	APIUtils.fetchPosts()
	.then(posts => dispatch(getPosts(posts))
)

export const getPosts = posts => ({
		type: GET_POSTS,
		posts
})

export const addPost = (data) => dispatch => {
	APIUtils.addPost(data)
		.then(post => dispatch(pushPostToStore(post)))
}

export const pushPostToStore = post => ({
		type: ADD_POST,
		post
})


export const deletePost = (id) => {
	APIUtils.deletePost(id)
		.then(post => ({
				type: DELETE_POST,
				post
		}))
}

export const editPost = (id, data) => {
	APIUtils.editPost(id, data)
		.then(post => ({
				type: DELETE_POST,
				post
		}))
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
