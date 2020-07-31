//#region
import React from 'react';
import {DisplayImages} from '../DisplayImages/DisplayImages';
import Grid from '@material-ui/core/Grid';
import {LoginButton} from '../../LoginPage/LoginButton/LoginButton';
import {SignupButton} from '../../SignupPage/SignupButton/SignupButton';
import './Welcome.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';
import RouteWithSubRoutes from '../../RouteWithSubRoutes';
//#endregion
const axios = require('axios');

function Welcome(props) {
  const sendRequest = async () => {
    const response = await axios.get('http://localhost:4000');
  };

  return (
    <Grid container justify='center' className='welcomeGrid'>
      {/*//#region*/}
      <Grid
        container
        justify='space-between'
        alignContent='space-around'
        wrap='nowrap'
        direction='row'
        className='header'>
        <Grid item xs={6} className='welcomeTitle'>
          recommen<span id='inlineTitleDesign'>derrr</span>
        </Grid>
        <Grid item xs={3} sm={2} md={2} className='loginButton'>
          <Link to='/login' className='linkToLogin'>
            <LoginButton />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} className='images'>
        <DisplayImages />
      </Grid>
      <Grid item xs={12} className='signupButton'>
        <Link to='/signup' className='linkToSignup'>
          <SignupButton size='small'></SignupButton>
        </Link>
      </Grid>
      {/*//#endregion*/}
      <Switch>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Grid>
  );
}

export default Welcome;
