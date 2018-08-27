import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import NextTrip from "./NextTrip";
import TripPreview from "./TripPreview";

import "../../../stylesheets/Trips.css";
import { Query } from "react-apollo/react-apollo.browser.umd";
import { gql } from "apollo-boost";

const Trips = () => (
  <div className="content">
    <Grid className="thin">
      <Row>
        <Col xs={12} className="next-trip-col">
          <NextTrip/>
        </Col>
      </Row>
      <Query query={gql`{
          trips @client {
            id
            title
            date
            video
            text
          }
        }`}>
        {({ loading, error, data: { trips } }) =>
          loading ? <p>Loading...</p>
            : error ? <p>Error :(</p>
            : trips.map(trip =>
              <Row key={trip.id}>
                <TripPreview trip={trip}/>
              </Row>
            ).reduce((a, b) => <div>{a}
              <hr className="separator"/>
              {b}</div>)
        }
      </Query>
    </Grid>
  </div>
);

export default Trips;