import React from "react";
import { Image } from "react-bootstrap";

class LoadableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleImageLoaded() {
    this.setState({ loading: false });
  }

  handleImageErrored() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <Image
          className={this.props.imgClass}
          src={this.props.src}
          id={this.props.id}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          rounded={this.props.rounded}
          responsive={this.props.responsive}
          circle={this.props.circle}
          alt={this.props.alt}
        />
        {this.state.loading ? <img className="loading-shaka" src={process.env.PUBLIC_URL + "/shaka.png"} alt="Loading"/> : null}
      </div>
    );
  }
}
export default LoadableImage;

