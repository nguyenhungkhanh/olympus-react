import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Newsfeed from './containers/pages/Newsfeed/Newsfeed.js';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/newsfeed" component={Newsfeed} />
    </div>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
