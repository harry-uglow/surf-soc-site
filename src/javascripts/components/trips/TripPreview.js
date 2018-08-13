import React from "react";
import {Image} from "react-bootstrap";
import YoutubeEmbedVideo from "youtube-embed-video";
import group from '../../../images/portugal_lunch.jpg'

import '../../../stylesheets/Trips.css';
import {Link} from "react-router-dom";

const maxPreviewLength = 500;

const trips = {
  moliets18: {
    title: "Moliets 2018",
    date: "1st - 7th July",
    video: true
  },
  portugal18: {
    title: "Portugal 2018",
    date: "24th - 31st March",
    video: false
  }
};
let placeholder = "";
for (var i = 0; i < 100; i++) {
  placeholder += "We went surfing and it was fun. "
}

const TripPreview = ({tripId}) => (
  <div className="section-inner">
    <div className="header">
      <h2>{trips[tripId].title}</h2>
      <h5>{trips[tripId].date}</h5>
      {trips[tripId].video ? <YoutubeEmbedVideo className="article-main-media" videoId="Hilm2r6mLw4" suggestions={false}/>
        : <Image className="article-main-media" src={group} responsive /> }
    </div>
    <p>{placeholder.substring(0, maxPreviewLength).trim()}... <Link to={"/trips/" + tripId}>(read more)</Link></p>
  </div>
);

export default TripPreview;