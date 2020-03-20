import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import RhymocerousBuilder from './components/RhymocerousBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
      <RhymocerousBuilder />
  </Router>
  , document.getElementById('root'));
