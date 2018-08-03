import React from "react";
import {Row} from "react-bootstrap";
import YoutubeEmbedVideo from "youtube-embed-video";

import '../../../stylesheets/Trips.css'

let placeholder = "";
for(var i=0; i < 100; i++){
  placeholder += "We went surfing and it was fun."
}

const TripPreview = () => (
  <Row className="trip-preview">
    <div className="header">
      <h2>Moliets 2018</h2>
      <h5>1st - 7th July</h5>
      <YoutubeEmbedVideo videoId="Hilm2r6mLw4" suggestions={false} />
    </div>
    <p>{placeholder}</p>
  </Row>
);

export default TripPreview;