import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { fetchCategories, fetchAllPosts, selectCategory } from './actions'
import {connect} from 'react-redux'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import CategoryPage from './components/CategoryPage'
import CreatePost from './components/CreatePost'
import FullPost from './components/FullPost'

class App extends Component {
  componentDidMount(){

  }
  render() {
    const category = 'react';
    return (
      <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path={`/${category}`} render={() => (
              <CategoryPage activeCategory="test" />
          )} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/posts/" component={FullPost} />
        </Switch>
      </BrowserRouter>
      </div>
    );
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
    getCategories: () => dispatch(fetchCategories()),
    getPosts: () => dispatch(fetchAllPosts()),
		setCurrentCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
