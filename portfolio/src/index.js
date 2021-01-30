import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css';

import App from './App';
import About from './Views/About'

ReactDOM.render(
  <Router>
    <Route exact path="/about"><About /></Route>
    <Route exact path="/"><App /></Route>
  </Router>,
  document.getElementById('root')
);
