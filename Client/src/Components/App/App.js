import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
  useHistory,
} from 'react-router-dom';
import Search from '../SearchPage/Search/Search';
import { Welcome } from '../WelcomePage/Welcome/Welcome';
import Login from '../LoginPage/Login/Login';
import Signup from '../SignupPage/Signup/Signup';
import queryString from 'query-string';

export default function App() {
  let history = useHistory();
  // const values = queryString.parse(this.props.location.search);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            component={
              Search
              //category={values.cat}
              // searchTerm={values.q}
              //offset={values.q - 1}
            }
          />
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
