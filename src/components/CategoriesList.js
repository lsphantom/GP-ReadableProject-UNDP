import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class CategoriesList extends Component {


render (){
  const {categories} = this.props
	return (
	<ul className="categories-list">
		<li>
      <NavLink activeClassName={"active"} to="/">all</NavLink>
    </li>
		{categories ? categories.map((category, index) =>
		<li key={index}>
      <NavLink activeClassName={"active"} id={category.name} to={`/${category.name}`}>{category.name}</NavLink>
    </li>)
    : false}
	</ul>
	)
}
}

export default CategoriesList;
