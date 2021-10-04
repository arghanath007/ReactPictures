import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <img
        ref={this.imageRef}
        src={urls.raw}
        alt={alt_description}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      />
    );
  }
}

export default ImageCard;
