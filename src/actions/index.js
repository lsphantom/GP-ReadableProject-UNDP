import * as APIUtils from '../utils'

//** Action constants
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_IN_CATEGORY = 'GET_POSTS_IN_CATEGORY'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_FOR_POST = 'VOTE_FOR_POST'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_FOR_COMMENT = 'VOTE_FOR_COMMENT'

export const SET_POST_SORTING = 'SET_POST_SORTING'
export const SET_COMMENT_SORTING = 'SET_COMMENT_SORTING'


//** CATEGORIES
export const fetchCategories = () => dispatch =>
	APIUtils.fetchCategories()
	.then(categories => dispatch(getCategoriesSuccess(categories))
)
export const getCategoriesSuccess = categories => ({
		type: GET_CATEGORIES_SUCCESS,
		categories
})
export const selectCategory = (category) => {
	return {
		type: SET_CURRENT_CATEGORY,
		category
	}
}


//** POSTS
export const fetchAllPosts = () => dispatch =>
	APIUtils.fetchPosts()
	.then(posts => dispatch(getPosts(posts))
)
export const fetchPostsInCategory = (category) => dispatch =>
	APIUtils.fetchPostsInCategory(category)
		.then(posts => dispatch(getPostsInCategory(category))
)
export const getPosts = posts => ({
		type: GET_POSTS,
		posts
})
export const getPostsInCategory = (posts) =>  ({
		type: GET_POSTS_IN_CATEGORY,
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
export const changeVoteScore = (id, voteType) => dispatch => {
	APIUtils.changeVoteScore(id, voteType)
		.then(dispatch(voteForPost(id, voteType)))
}
export const voteForPost = (id, voteType) => ({
		type: VOTE_FOR_POST,
		id
})


//** COMMENTS
export const fetchComments = (id) => dispatch =>
	APIUtils.fetchComments(id)
		.then(comments => dispatch(getComments(comments))
)
export const getComments = (comments) => ({
		type: GET_COMMENTS,
		comments
})
export const addComment = (comment) => dispatch =>
	APIUtils.addComment(comment)
		.then(data => dispatch(pushComment(data))
)
export const pushComment = (comments) => {
	console.log(comments);
	return {
		type: ADD_COMMENT,
		comments
	}
}
export const deleteComment = (id) => dispatch =>
	APIUtils.deleteComment(id)
		.then(data => dispatch(removeComment(data))
)
export const removeComment = (comment) => {
	return {
		type: DELETE_COMMENT,
		comment,
	}
}
export const changeCommentScore = (id, voteType) => dispatch => {
	APIUtils.changeCommentScore(id, voteType)
		.then(dispatch(voteForComment(id, voteType)))
}
export const voteForComment = (id, voteType) => ({
		type: VOTE_FOR_COMMENT,
		id
})


//** SORTING
export const setPostSorting = (sortingBy) => {
	return {
		type: SET_POST_SORTING,
		sortingBy,
	}
}
export const setCommentSorting = (sortingBy) => {
	return {
		type: SET_COMMENT_SORTING,
		sortingBy,
	}
}
