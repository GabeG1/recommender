import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';
import { Search } from '../SearchPage/Search/Search';
import { Welcome } from '../WelcomePage/Welcome/Welcome';
import Login from '../LoginPage/Login/Login';
import Signup from '../SignupPage/Signup/Signup';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/search" component={Search} />
            <Route
              path="/login"
              component={() => (
                <div>
                  <Welcome />
                  <Login />
                </div>
              )}
            />
            <Route
              path="/signup"
              component={() => (
                <div>
                  <Welcome />
                  <Signup />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
