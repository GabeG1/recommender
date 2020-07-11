import React from 'react';
import './DisplayImages.css';

export class DisplayImages extends React.Component {

    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
    }
    startTimer() {
        console.log("here");
        setInterval(this.props.updateImage, 3000);
    }
  render()
  {
  return (
    <div onLoad={this.startTimer()} className="displayImages">
      <img src={this.props.image} alt="display"/>
    </div>
  );
}
}
