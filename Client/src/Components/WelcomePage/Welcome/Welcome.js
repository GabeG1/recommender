//#region
import React from 'react';
import {DisplayImages} from '../DisplayImages/DisplayImages';
import {Grid} from '@material-ui/core';
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
import {makeStyles} from '@material-ui/core';
//#endregion
const axios = require('axios');

const useStyles = makeStyles(({breakpoints}) => ({
  welcomeGrid: {
    backgroundColor: '#282c34',
    overflowX: 'hidden',
  },
  header: {
    height: '5rem',
    backgroundColor: 'inherit',
    borderBottom: '2px solid #dc4cacb5',
    width: '100%',
    position: 'fixed',
    zIndex: '20',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  welcomeTitle: {
    paddingLeft: '3%',
    color: '#e3dddecc',
    fontSize: '3rem',
    fontFamily: 'Frank Ruhl Libre, serif',
    fontWeight: 'bold',
  },

  loginButton: {
    zIndex: '1',
  },
  images: {
    position: 'absolute',
    left: '0',
    right: '0',

    zIndex: '1',
    [breakpoints.up('xs')]: {
      '& img': {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
      },
    },
    [breakpoints.up('sm')]: {
      '& img': {height: '650px'},
    },
    [breakpoints.up('md')]: {
      '& img': {height: '700px'},
    },
    [breakpoints.up('lg')]: {
      '& img': {height: '750px'},
    },
  },
  signupButton: {
    position: 'relative',
    bottom: 0,
    alignSelf: 'flex-end',
    //paddingTop: 'rem',
    [breakpoints.up('xs')]: {
      marginTop: '60px',
    },
    [breakpoints.up('sm')]: {
      marginTop: '100px',
    },
    [breakpoints.up('md')]: {
      marginTop: '250px',
    },
    [breakpoints.up('lg')]: {
      marginTop: '300px',
    },
    zIndex: '3',
  },
  linkToLogin: {
    zIndex: '5',
  },
  linkToSignup: {textDecorationLine: 'none'},
  signupButtonText: {
    fontSize: 50,
  },
  websiteMessageContainer: {
    textAlign: 'center',
  },
  websiteMessage: {
    width: '100%',
    height: 'auto',
    fontFamily: 'Pacifico, cursive',
    textTransform: 'uppercase',
    color: '#ffffffbd',
    fontSize: '60px',
    wordSpacing: 10,
    zIndex: '5',
    lineHeight: 1.5,
    [breakpoints.up('xs')]: {marginTop: 150},
    [breakpoints.up('sm')]: {marginTop: 200},
  },
}));

function Welcome(props) {
  const classes = useStyles();
  const sendRequest = async () => {
    const response = await axios.get('http://localhost:4000');
  };
  return (
    <Grid container justify='center' classes={{root: classes.welcomeGrid}}>
      {/*//#region*/}
      <Grid
        container
        justify='space-between'
        alignContent='space-around'
        wrap='nowrap'
        direction='row'
        classes={{container: classes.header}}>
        <Grid
          item
          xs={9}
          sm={10}
          md={10}
          classes={{root: classes.welcomeTitle}}>
          recommen<span id='inlineTitleDesign'>derrr</span>
        </Grid>
        <Grid item xs={3} sm={2} md={2} classes={{root: classes.loginButton}}>
          <Link
            to='/login'
            underline='none'
            className='linkToSearch'
            classes={{root: classes.linkToLogin}}>
            <LoginButton />
          </Link>
        </Grid>
      </Grid>
      <Grid xs={12} sm={12} item classes={{item: classes.images}} id='images'>
        <DisplayImages />
      </Grid>
      <Grid
        container
        justify='center'
        alignContent='center'
        classes={{root: classes.websiteMessageContainer}}>
        <Grid
          item
          xs={12}
          sm={9}
          md={12}
          classes={{root: classes.websiteMessage}}>
          "Stay inside and consume media" - G^2 & Sol
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{root: classes.signupButton}}>
        <Link
          to='/signup'
          underline='none'
          className='linkToSearch'
          classes={{root: classes.linkToSignup}}>
          <SignupButton size='small' />
        </Link>
      </Grid>
      {/*//#endregion*/}
      <Switch>
        {props.routes.map((route, i) => (
          <div>
            {console.log(route, '', i)}
          <RouteWithSubRoutes key={i} {...route} />
          </div>
        ))}
      </Switch>
    </Grid>
  );
}

export default Welcome;
