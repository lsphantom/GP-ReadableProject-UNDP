import React, {Component} from 'react';


class SortBy extends Component {
render(){
	return(
	<ul className="sortby">
		<li className="active">Date (Most Recent)</li>
		<li>Score (Highest)</li>
	</ul>
	)
}
}

export default SortBy;