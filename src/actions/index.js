import * as APIUtils from '../utils'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_IN_CATEGORY = 'GET_POSTS_IN_CATEGORY'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
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

export function selectCategory({category}) {
	return {
		type: SET_CURRENT_CATEGORY,
		category
	}
}


// POSTS
export const fetchAllPosts = () => dispatch =>
	APIUtils.fetchPosts()
	.then(posts => dispatch(getPosts(posts))
)

export const fetchPostsInCategory = (category) => dispatch =>
	APIUtils.fetchPostsInCategory(category)
		.then(posts => dispatch(getPostsInCategory(category)))


export const getPostsInCategory = (posts) =>  ({
		type: GET_POSTS_IN_CATEGORY,
		posts
})

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


export const deletePost = (id) => dispatch => {
	APIUtils.deletePost(id)
		.then(post => dispatch(pushDeletePost(post)))
}

export const pushDeletePost = post => ({
	type: DELETE_POST,
	post
})

export const editPost = (id, data) => {
	APIUtils.editPost(id, data)
		.then(post => ({
				type: EDIT_POST,
				post
		}))
}

export const fetchPost = (id) => dispatch =>
	APIUtils.fetchPost(id)
		.then(post => dispatch(pushPostDetails(post))
)

export const pushPostDetails = (post) => ({
		type: GET_POST_DETAILS,
		post
})

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
