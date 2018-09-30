import React from "react";
import YoutubeEmbedVideo from "youtube-embed-video";


class LoadableVideo extends React.Component {
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
        <YoutubeEmbedVideo
          className={this.props.vidClass}
          videoId={this.props.videoId}
          suggestions={false}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
        {this.state.loading ? <img className="loading-shaka video" src={process.env.PUBLIC_URL + "shaka.png"} alt="Loading"/> : null}
      </div>
    );
  }
}
export default LoadableVideo;