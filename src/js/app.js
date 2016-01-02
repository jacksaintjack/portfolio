import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app';
import Journey from './components/journey';
import Skills from './components/skills';
import JobHistory from './components/jobHistory';
import Projects from './components/projects';

ReactDOM.render((
  <Router>
    <Route path='/' component={App}></Route>
    <Route path='journey' component={Journey}></Route>
    <Route path='skills' component={Skills}></Route>
    <Route path='jobs' component={JobHistory}></Route>
    <Route path='projects' component={Projects}></Route>
  </Router>
), document.getElementById('app'));
