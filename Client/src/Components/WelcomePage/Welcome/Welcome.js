//#region
import React from 'react';
import { DisplayImages } from '../DisplayImages/DisplayImages';
import Grid from '@material-ui/core/Grid';
import * as Styles from './WelcomeStyles.js';
import { LoginButton } from '../../LoginPage/LoginButton/LoginButton';
import { SignupButton } from '../../SignupPage/SignupButton/SignupButton';
import './Welcome.css';
import { FaFireAlt } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';
import { GridList, Box } from '@material-ui/core';
import { PopularItems } from '../PopularItems/PopularItems';
import Songs from '../../../Util/SongFinder';
import { SearchResultsList } from '../../SearchPage/SearchResultsList/SearchResultsList';
//#endregion
const axios = require('axios');

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularTracks: '',
    };
    this.sendRequest = this.sendRequest.bind(this);
    this.getPopularTracks = this.getPopularTracks.bind(this);
  }

  async getPopularTracks() {
    const popularTracks = await Songs.getPopularSongs();
    this.setState({ popularTracks: popularTracks });
  }
  async sendRequest() {
    const response = await axios.get('http://localhost:4000');
    console.log('About to send response');
    console.log(response);
    console.log(`The response is ${response.data}`);
  }

  componentDidMount() {
    console.log('this gets called');

    //this.sendRequest();
  }
  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    console.log('welcome is rendering');
    return (
      <Grid container justify="center" className="welcomeGrid">
        {/*//#region*/}
        <Grid
          container
          justify="space-between"
          alignContent="space-around"
          wrap="nowrap"
          direction="row"
          className="header"
        >
          <Grid item xs={6} className="welcomeTitle">
            recommen<span id="inlineTitleDesign">derrr</span>
          </Grid>
          <Grid item xs={3} sm={2} md={2} className="loginButton">
            <Link to="/login" className="linkToLogin">
              <LoginButton />
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} className="images">
          <DisplayImages />
        </Grid>
        <Grid item xs={12} className="signupButton">
          <Link to="/signup" className="linkToSignup">
            <SignupButton size="small"></SignupButton>
          </Link>
        </Grid>
        <Grid item xs={12} className="popularItems">
          <h1 className="popularMusicLabel">
            <span className="popularMusicTitle">Trending Music </span>
            <span className="fire">
              <BsMusicNoteBeamed className="fireIcon" />
            </span>
          </h1>
          <section className="popularItemsList">
            <PopularItems />
          </section>
        </Grid>
        {/*//#endregion*/}
      </Grid>
    );
  }
}
