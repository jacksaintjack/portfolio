import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app';
import Journey from './components/journey';
import Skills from './components/skills';

ReactDOM.render((
  <Router>
    <Route path='/' component={App}></Route>
    <Route path='journey' component={Journey}></Route>
    <Route path='skills' component={Skills}></Route>
  </Router>
), document.getElementById('app'));
