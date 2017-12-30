import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { fetchCategories, fetchAllPosts, selectCategory } from './actions'
import {connect} from 'react-redux'

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import CreatePost from './components/CreatePost'
import FullPost from './components/FullPost'
import EditPost from './components/EditPost'
import NotFoundPage from './components/NotFoundPage'


class App extends Component {
  componentDidMount(){
    //Fetch all categories and posts
	  this.props.getCategories();
	  this.props.getPosts();
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create-post" component={CreatePost} />
          <Route exact path="/:category" component={LandingPage} />
          <Route exact path="/posts/:post_id" component={EditPost} />
          <Route exact path="/:category/:post_id" component={FullPost} /> 
          <Route component={NotFoundPage} />
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
