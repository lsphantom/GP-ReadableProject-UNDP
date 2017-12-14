import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import {connect} from 'react-redux'

import LandingPage from './components/LandingPage'
//import CategoryPage from './components/CategoryPage'
import CreatePost from './components/CreatePost'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header row">
          <h2>Readable Project</h2>
        </div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}


export default App
