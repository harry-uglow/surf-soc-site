import React from "react";
import {Image} from "react-bootstrap";
import YoutubeEmbedVideo from "youtube-embed-video";
import group from '../../../images/portugal_lunch.jpg'

import '../../../stylesheets/Trips.css';
import {Link} from "react-router-dom";

const maxPreviewLength = 500;

const TripPreview = ({ trip: { id, title, date, video, text } }) => {
  return (
    <div className="section-inner">
      <div className="header">
        <h2>{title}</h2>
        <h5>{date}</h5>
        {video ? <YoutubeEmbedVideo className="article-main-media" videoId="Hilm2r6mLw4" suggestions={false}/>
          : <Image className="article-main-media" src={group} responsive /> }
      </div>
      <p>{text[0].join(" ").substring(0, maxPreviewLength).trim()}... <Link to={"/trips/" + id}>(read more)</Link></p>
    </div>
  );
};

export default TripPreview;