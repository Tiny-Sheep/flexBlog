import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import { Routes } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './themes/GlobalStyle'


ReactDOM.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('root'));
registerServiceWorker();
