import React from 'react';
import './DisplayImages.css';
import CrossFadeImage from 'react-crossfade-image';
export class DisplayImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }
  componentWillMount() {
    clearInterval(this.state.interval);
  }
  componentDidMount() {
    this.setState({
      interval: setInterval(this.props.updateImage, 4000),
    });
  }
  render() {
    return (
      <div className="displayImages">
        <CrossFadeImage duration={1000} src={this.props.image} alt="display" />
      </div>
    );
  }
}
