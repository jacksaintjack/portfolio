import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app'

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
    </Route>
  </Router>
), document.getElementById('app'));
