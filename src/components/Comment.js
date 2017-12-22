import React from 'react'


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
		<p className="comment-author">{props.author}</p>
		<p className="comment-body">{props.content}</p>
	</div>
)
}

export default Comment