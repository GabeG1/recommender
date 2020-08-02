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
import EditInfo from '../EditInfoPage/EditInfo/EditInfo';
import UserInfo from '../UserInfo/UserInfo';


export default function App(props) {
  let history = useHistory();

  const userContext = React.createContext({fName: 'hi'});

  const routes = [
    {
      path: "/search",
      component: Search,
      routes: [
        {
          path: "/search/editInfo",
          component: EditInfo
        }
      ]
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
        },
      ]
    }
  ];

  return (
    <userContext.Provider value={history ? history.response : null}>
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} id={i}  {...route} />
          ))}
        </Switch>
    </Router>
   </userContext.Provider>
  )
          }