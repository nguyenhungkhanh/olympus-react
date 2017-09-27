import React from 'react';
import ReactDOM from 'react-dom';
import Login from './containers/pages/Login/index.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/profile-settings" component={App} />
      <Route path="/profile" component={App} />
      <Route path="/login" component={Login} /> 
    </Switch>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
