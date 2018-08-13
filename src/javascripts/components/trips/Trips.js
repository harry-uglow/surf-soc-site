import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import NextTrip from "./NextTrip";
import TripPreview from "./TripPreview";

import "../../../stylesheets/Trips.css";

const recentTrips = ["moliets18", "portugal18"];

const Trips = () => {
  return (
    <div className="content">
      <Grid className="thin">
        <Row>
          <Col xs={12} className="next-trip-col">
            <NextTrip/>
          </Col>
        </Row>
        {recentTrips.map(id =>
          <Row key={id}>
            <hr className="separator"/>
            <TripPreview tripId={id}/>
          </Row>
        )}
      </Grid>
    </div>
  );
};

export default Trips;