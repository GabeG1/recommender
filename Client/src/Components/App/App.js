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
import Welcome from '../WelcomePage/Welcome/Welcome';
import Login from '../LoginPage/Login/Login';
import Signup from '../SignupPage/Signup/Signup';
import queryString from 'query-string';
import RouteWithSubRoutes from '../RouteWithSubRoutes'

export default function App() {
  let history = useHistory();
  const routes = [
    {
      path: "/search",
      component: Search
    },
    {
      path: "/",
      component: Welcome,
      routes: [
        {
          path: "/signup",
          component: Signup
        },
        {
          path: "/login",
          component: Login
        }
      ]
    }
  ];
  // const values = queryString.parse(this.props.location.search);
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );

          }
