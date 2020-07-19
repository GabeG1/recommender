
import React from 'react';
import { DisplayImages } from '../DisplayImages/DisplayImages';
import Grid from "@material-ui/core/Grid";
import * as Styles from './WelcomeStyles.js';
import { LoginButton } from '../../LoginPage/LoginButton/LoginButton';
import { SignupButton } from '../../SignupPage/SignupButton/SignupButton';
import './Welcome.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";


const images = {
  image_1: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  image_2: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  image_3: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  image_4: "https://images.pexels.com/photos/3004075/pexels-photo-3004075.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_5: "https://images.pexels.com/photos/1652353/pexels-photo-1652353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
}

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDisplay: images.image_1,
    }
    this.updateImage = this.updateImage.bind(this);
  }


  updateImage() {
    let curImageKey = Object.keys(images).find(key => {
      return images[key] === this.state.imageDisplay
    });
    const curImageNum = Number(curImageKey.substr(6));
    const nextImage = (curImageNum + 1) % 5 + 1;
    this.setState({
      imageDisplay: images[`image_${nextImage}`]
    });
  }

  render() {
    return (
      <div className="welcomeTitle">
        <header>
          <Grid container direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item className="welcomeTitle">
              <h1>
                recommen<span id="inlineTitleDesign">derrr</span>
              </h1>
            </Grid>
            <Styles.LoginGridItem item>
              <Link to="/login" className="linkToLogin" >
                <LoginButton />
              </Link>
            </Styles.LoginGridItem>
          </Grid>
        </header>
        <section className="images">
          <DisplayImages updateImage={this.updateImage} image={this.state.imageDisplay}>

          </DisplayImages>
        </section>
        <section className="signupButton">
          <Link to="/signup" className="linkToSignup">
            <SignupButton size="small">
            </SignupButton>
          </Link>
        </section>
      </div>
    );
  }

}


