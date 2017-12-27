import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setPostSorting} from '../actions'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'

class SortBy extends Component {
state = {
	dateToggle: '',
	scoreToggle: ''
}
componentDidMount(){
	//Set default sorting
	this.setState({
		dateToggle: '_+',
		scoreToggle: ''
	})

	//Dispatch initial sorting
	this.props.sortBy('date_+');
}
setSorting = (event, sorter) => {
	event.preventDefault();
	const currentDateToggle = this.state.dateToggle;
	const currentScoreToggle = this.state.scoreToggle;
	let prefix = sorter;
	let suffix;

	//Set states and toggle through options
	if (sorter === 'date'){
		if (currentDateToggle === '_+') {
			suffix = '_-';
			this.setState({dateToggle: suffix, scoreToggle: ''});
		} else {
			suffix = '_+';
			this.setState({dateToggle: suffix, scoreToggle: ''});
		}
	} else {
		if (currentScoreToggle === '_+') {
			suffix = '_-';
			this.setState({scoreToggle: suffix, dateToggle: ''});
		} else {
			suffix = '_+';
			this.setState({scoreToggle: suffix, dateToggle: ''});
		}
	}

	this.toggleSorting(prefix, suffix);
}
toggleSorting = (sorting, order) => {
	let sortingCompound = `${sorting}${order}`;
	this.props.sortBy(sortingCompound);
}

render(){
	const {dateToggle, scoreToggle} = this.state;

	return(
	<ul className="sortby">
		<li>
			<a href="" id="date" onClick={event => (this.setSorting(event, event.target.id))}>
			{ dateToggle !== ''
			  ? ( dateToggle === '_+' ? <FaCaretDown /> : <FaCaretUp /> )
			  : false
			}
			 Date</a>
		</li>
		<li>
			<a href="" id="score" onClick={event => (this.setSorting(event, event.target.id))}>
			{ scoreToggle !== ''
			  ? ( scoreToggle === '_+' ? <FaCaretDown /> : <FaCaretUp /> )
			  : false
			}
			 Score</a>
		</li>
	</ul>
	)
}
}


function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    sortBy: (sorting) => dispatch(setPostSorting(sorting)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);