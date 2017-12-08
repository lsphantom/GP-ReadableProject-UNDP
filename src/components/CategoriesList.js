import React, {Component} from 'react';
import {connect} from 'react-redux';

class CategoriesList extends Component {

componentDidMount(){
  
}

render (){
	return (
	<ul className="categories-list">
		<li className="active">All</li>
		{/*this.state.categories.map((category, index) =>
			<li key={index}>{category.name}</li>
		)*/}
	</ul>
	)
}
}


function mapStateToProps (readable) {
  return {
    readable
  }
}

export default connect(mapStateToProps)(CategoriesList);