
import React from 'react';
import './Welcome.css';
import {DisplayImages} from '../DisplayImages/DisplayImages';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";



const images = {
  image_1: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  image_2: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  image_3: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  image_4: "https://images.pexels.com/photos/3004075/pexels-photo-3004075.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_5: "https://images.pexels.com/photos/1652353/pexels-photo-1652353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
}

const useStyles = makeStyles();
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDisplay: images.image_1
    }
    this.updateImage = this.updateImage.bind(this);
  }

  updateImage() {
    let curImageKey = Object.keys(images).find(key =>{
      return images[key] === this.state.imageDisplay});
    const curImageNum = Number(curImageKey.substr(6));
    const nextImage = (curImageNum+1)%5+1;
    this.setState( {
      imageDisplay: images[`image_${nextImage}`]
    });
  }
  render() {
    const classes = this.props.classes;
   //<CustomLinearProgress variant="determinate" color="primary" value={30}/>
  return (
    <div className="welcomeTitle">
      <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap" rel="stylesheet"></link>
    <header>
      <Grid container direction="row"
  justify="space-between"
  alignItems="center">
        <Grid item className="title">
      recommen<span id="inlineTitleDesign">derrr</span>
        </Grid>
            <Grid item className="signupButtons">
               <Button
                 className='loginButton'
                 onClick={e => e.preventDefault()}
                 color="white"
               >
                Login
               </Button>
               </Grid>
               </Grid>
               </header>
          <section className="images">
     <DisplayImages updateImage={this.updateImage} image={this.state.imageDisplay}>
    
     </DisplayImages>
     </section>
     <Button
                 className='signupButton'
                 onClick={e => e.preventDefault()}
                 round
                 size="small"
                 color="danger"
               >
                 Signup
               </Button>
  
      </div>
  );
}

}

export default () => {
  const classes = useStyles();
  return (
      <Welcome classes={classes} />
  )
}

