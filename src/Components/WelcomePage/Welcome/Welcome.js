import React from 'react';
import './Welcome.css';
import {DisplayImages} from '../DisplayImages/DisplayImages';
import {SearchBar} from '../SearchBar/SearchBar';
import Button from '@material-ui/core/Button/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import '~/Downloads/material-kit-react-master/material-kit-react-master/dist/material-kit-react.css';
//import Button from ' ~/Downloads/material-kit-react-master/material-kit-react-master/dist/components/CustomButtons/Button';



const images = {
  image_1: "https://images.pexels.com/photos/6270/woman-flowers-holidays-girl-6270.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_2: "https://images.pexels.com/photos/1188470/pexels-photo-1188470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_3: "https://images.pexels.com/photos/115001/pexels-photo-115001.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_4: "https://images.pexels.com/photos/3004075/pexels-photo-3004075.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  image_5: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
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
   //<CustomLinearProgress variant="determinate" color="primary" value={30}/>
  return (
    <div className="welcomeTitle">
      <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap" rel="stylesheet"></link>
      <header>recomen<span>derrr</span>
    <ButtonGroup size='large' classes={{root: 'buttonGroup'}} disableElevation variant="contained" color="primary">
  <Button classes={{root: 'accountButtons'}} >Sign In</Button>
  <Button classes={{root: 'accountButtons'}}>Create Account</Button>
</ButtonGroup>
      </header>
      <DisplayImages updateImage={this.updateImage} image={this.state.imageDisplay}/>
      <section className="searchBar">
      <SearchBar />
      </section>
     
    </div>
  );
}
}
export default Welcome;
