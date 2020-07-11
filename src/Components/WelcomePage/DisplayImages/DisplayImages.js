import React from 'react';
import './DisplayImages.css';
import CrossfadeImage from 'react-crossfade-image';
export class DisplayImages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null
        }
    }
    componentWillMount() {

        clearInterval(this.state.interval);
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(this.props.updateImage, 3000)
             });
    }
  render()
  {
  return (
    <div className="displayImages">
      <CrossfadeImage src={this.props.image}/>
    </div>
  );
}
}
