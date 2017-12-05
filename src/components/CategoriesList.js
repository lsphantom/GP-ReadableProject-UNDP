import React, {Component} from 'react';
import {connect} from 'react-redux';


class CategoriesList extends Component {
state = {
  categories: []
}

componentDidMount(){
  const url = `${process.env.REACT_APP_BACKEND}/categories`;
    fetch(url, { headers: { 'Authorization': 'top-secret' },
                 credentials: 'gp' } )
      //.then( (res) => { return(res.text()) })
      .then(data => data.json())
      .then(data => {
        this.setState({categories: data.categories})
      });
}

render (){
	return (
	<ul className="categories-list">
		<li className="active">All</li>
		{this.state.categories.map((category, index) =>
			<li key={index}>{category.name}</li>
		)}
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