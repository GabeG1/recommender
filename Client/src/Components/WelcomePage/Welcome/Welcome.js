//#region
import React, {useRef, useEffect, useState} from 'react';
import DisplayImages from '../DisplayImages/DisplayImages';
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
import withMemo from '../../withMemo';
//#endregion
const axios = require('axios');


//styles
const useStyles = makeStyles(({breakpoints}) => ({
  welcomeGrid: {
    width: '100%',
    backgroundColor: '#f8f6f6',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    height: '4rem',
    backgroundColor: '#ffffff',
    WebkitBoxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    MozBoxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    width: '100%',
    position: 'fixed',
    zIndex: '20',
  },
  welcomeTitle: {
    textAlign: 'center',
    color: 'rgba(79, 79, 79, 0.93)',
    fontSize: '2rem',
    fontFamily: 'Frank Ruhl Libre, serif',
    fontWeight: 800,
  },

  loginButton: {
    zIndex: '1',
  },
  mainDisplayContent: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
  },
  images: {
    display: 'flex',
    height: 800,
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '1',
    [breakpoints.up('xs')]: {
      height: 800,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
  signupButton: {
    cursor: 'pointer',
    pointerEvents: 'auto',
    alignSelf: 'flex-end',
    position: 'fixed',
    //paddingTop: 'rem',
    [breakpoints.up('xs')]: {
      bottom: 100,
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

  websiteMessage: {
    pointerEvents: 'none',
    textAlign: 'center',
    backgroundColor: 'transparent',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 'auto',
    fontFamily: 'Pacifico, cursive',
    textTransform: 'uppercase',
    //color: '#fafdffcc',
    color: '#FFF',
    fontSize: '60px',
    wordSpacing: 10,
    zIndex: 12,
    top: 100,
    position: 'fixed',
    lineHeight: 1.5,
    [breakpoints.up('xs')]: {marginTop: 120},
    [breakpoints.up('sm')]: {marginTop: 120},
  },
  websiteOverview: {
    WebkitBoxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    MozBoxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    boxShadow: '0 0 6px 0 rgba(0,0,0,.1)',
    color: '#000000',
    paddingTop: 50,
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    height: 300,
    width: '100%',
    zIndex: 11,
    fontSize: 30,
    textAlign: 'left',
    paddingRight: 20,
    backgroundColor: '#ffffff',
  },
  overviewQuestion: {
    textAlign: 'center',
    fontWeight: 800,
  },
}));

function Welcome(props) {
  const classes = useStyles();


  //Scroll handler
  const handleScroll = (e) => {
    console.log('scrolling');

    //If user has scrolled, adjust opacity of the grid with the classname 'mainDisplayContent' scrolling down decreases opacity; scrolling up increases opacity
    if (e.target.scrollTop > 0) {
      var currScrollPos2 = e.target.scrollTop;
      document.getElementById('mainDisplayContent').style.opacity =
        1 - currScrollPos2 / 800;
    }
  };
  useEffect(() => {
    //add scroll event listener
    document.getElementById('root').addEventListener('scroll', handleScroll);
    return () => {
      //remove scroll event listener for cleanup purposes
      document
        .getElementById('root')
        .removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Grid
      container
      justify='center'
      onScroll={handleScroll}
      classes={{root: classes.welcomeGrid}}>
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
      <Grid
        container
        id='mainDisplayContent'
        classes={{container: classes.mainDisplayContent}}>
        <Grid xs={12} sm={12} item classes={{item: classes.images}} id='images'>
          <DisplayImages />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={12}
          classes={{root: classes.websiteMessage}}>
          "Lets hope this works" -G^2, seconds before it didnt work
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
      </Grid>
      <Grid container classes={{root: classes.websiteOverview}}>
        <Grid item xs={3} classes={{root: classes.overviewQuestion}}>
          Why Recommender?
        </Grid>
        <Grid item xs={9}>
          A place to share whatever is on your mind about any topic of interest.
          Love that song? Leave a review. A recent movie not your favorite? Share your
          thoughts.
        </Grid>
        <Grid item xs={3} classes={{root: classes.overviewQuestion}}>
          What is Recommender?
        </Grid>
        <Grid item xs={9}>
          Created during the drudgery of lockdown caused by COVID 19. Recommender is a tool to

          help people find new media to consume, brightening their day and making the pandemic
          more bearable. It was a passion project, something beautiful to bloom from the 
          bleakness that comes with a lockdown, which in turn can make other's lockdowns 
          just a little brighter.

          Stay indoors and consume media
                  -G^2 and Sol
        </Grid>
      </Grid>
      {/*//#endregion*/}
      <Switch>
        {props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} id={i} {...route} />
        ))}
      </Switch>
    </Grid>
  );
}

export default withMemo(Welcome, []);
