import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectCategory} from '../actions'

class CategoriesList extends Component {
changeFilter(value) {
  //this.props.dispatch(selectCategory(value));
}

render (){
  const {categories} = this.props
	return (
	<ul className="categories-list">
		<li>
      <NavLink activeClassName={"active"}
               exact
               to="/"
               onClick={event => (this.changeFilter('all'))}>all</NavLink>
    </li>
		{categories ? categories.map((category, index) =>
		<li key={index}>
      <NavLink activeClassName={"active"}
               id={category.name}
               to={`/${category.name}`}
               value={category.name}>{category.name}</NavLink>
    </li>)
    : <li>No categories</li>}
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
		setCurrentCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
