import React from "react";
import {Grid, Image} from "react-bootstrap";
import YoutubeEmbedVideo from "youtube-embed-video";
import group from '../../../images/portugal_lunch.jpg'

import '../../../stylesheets/Trips.css';
import { gql } from "apollo-boost";
import { Query } from "react-apollo/react-apollo.browser.umd";


const TripFull = ({ id }) => (
  <Query
    query={gql`query Trip($id: String!) {
      trips(id: $id) @client {
        title
        date
        video
        text
      }
    }`}
    variables = {{ id }}
  >
    {({ loading, error, data: { trips } }) =>
      loading ? <p>Loading...</p>
        : error ? <p>Error :(</p>
        : trips.map(({ title, date, video, text }) =>
          <div className="content">
            <Grid className="thin">
              <div className="section-inner">
                <div className="header">
                  <h2>{title}</h2>
                  <h5>{date}</h5>
                  {video ? <YoutubeEmbedVideo videoId="Hilm2r6mLw4" suggestions={false}/>
                    : <Image className="article-main-img" src={group} responsive /> }
                </div>
                <p>{text}</p>
              </div>
            </Grid>
          </div>
        )
    }
  </Query>
);

export default TripFull;