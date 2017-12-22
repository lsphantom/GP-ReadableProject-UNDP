import React from 'react'
import {connect} from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import {deleteComment, fetchComments} from '../actions'

function Comment(props) {
let scoreClass;
if (props.score > 0){
	scoreClass = 'pos-score';
} else if (props.score < 0) {
	scoreClass = 'neg-score';
} else {
	scoreClass = '';
}
return(
	<div className="comment">
		<div className={`comment-score ${scoreClass}`}>{props.score}</div>
		<a className="comment-remove"
						href=""
						onClick={(event) => {
							props.removeComment(props.id);
							props.getComments(props.parentId);
						}}>x</a>
		<p className="comment-author">{props.author}</p>
		<p className="comment-body">{props.content}</p>
		<div className="comment-controls">
			<span><a className="comment-upvote" href="" onClick={() => {}}><FaArrowUp /></a></span>
			<span><a className="comment-downvote" href="" onClick={() => {}}><FaArrowDown /></a></span>
		</div>
	</div>
)
}


function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    getComments: (id) => dispatch(fetchComments(id)),
	removeComment: (comment) => dispatch(deleteComment(comment)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment)