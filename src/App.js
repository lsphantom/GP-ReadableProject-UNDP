import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {connect} from 'react-redux';

import CategoriesList from './components/CategoriesList'
import PostList from './components/PostList'
import SortBy from './components/SortBy'

import {getCategories} from './actions'


class App extends Component {
  goFetchCategories = () => {
    const url = `${process.env.REACT_APP_BACKEND}/categories`
    fetch(url, { headers: { 'Authorization': 'top-secret' },
                 credentials: 'gp' } )
      .then(data => data.json())
      .then(data => {
        this.props.dispatch(getCategories({categories: data.categories}))
      })
  }

  componentDidMount(){
    this.goFetchCategories()
  }
  
  render() {
    return (
      <div className="App">
      <div className="container-fluid">
        <div className="App-header row">
          <h2>Readable Project</h2>
        </div>
        <div className="container">
          <div className="categories-col col-sm-6">
          <h3>Categories</h3>
          <CategoriesList />
          <h4>Sort by</h4>
          <SortBy />
          </div>
          <div className="posts-col col-sm-6">
          <h3>Recent Posts</h3>
          <button>Add a new post &rarr;</button>
          
          <PostList />
          </div>
        </div>
      </div>
      </div>
    );
  }
}


function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}

export default connect(mapStateToProps)(App)