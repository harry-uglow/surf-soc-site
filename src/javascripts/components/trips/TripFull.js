import React from "react";
import {Grid, Image} from "react-bootstrap";
import YoutubeEmbedVideo from "youtube-embed-video";
import group from '../../../images/portugal_lunch.jpg'

import '../../../stylesheets/Trips.css';
import { gql } from "apollo-boost";
import { Query } from "react-apollo/react-apollo.browser.umd";

const separateLines = line => (
  line[0] === 'b'
  ? <p className="sub-header">{line.substring(1)}</p>
  : <p className={line[0] === '•' ? "no-justify" : ""}>{line}</p>
);

const includeImages = images => (section, index) => (
  <React.Fragment>
    {section.map(separateLines)}
    <Image className="article-main-media" src={images[index]} responsive />
  </React.Fragment>
);

const TripFull = ({ id }) => (
  <Query
    query={gql`query Trip($id: String!) {
      trips(id: $id) @client {
        title
        date
        video
        text
        images
      }
    }`}
    variables = {{ id }}
  >
    {({ loading, error, data: { trips } }) =>
      loading ? <p>Loading...</p>
        : error ? <p>Error :(</p>
        : trips.map(({ title, date, video, text, images }) =>
          <div className="content">
            <Grid className="thin">
              <div className="section-inner">
                <div className="header">
                  <h2>{title}</h2>
                  <h5>{date}</h5>
                  {video ? <YoutubeEmbedVideo className="article-main-media" videoId="Hilm2r6mLw4" suggestions={false}/>
                    : <Image className="article-main-img" src={group} responsive /> }
                </div>
                {text.map(includeImages(images))}
              </div>
            </Grid>
          </div>
        )
    }
  </Query>
);

export default TripFull;