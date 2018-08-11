import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import NextTrip from "./NextTrip";
import TripPreview from "./TripPreview";

import "../../../stylesheets/Trips.css";

const recentTrips = ["moliets18", "portugal18"];

class Trips extends Component {
  render() {
    return (
      <div className="content">
        <Grid className="thin">
          <Row>
            <Col xs={12}>
              <NextTrip/>
            </Col>
          </Row>
          {recentTrips.map(id =>
            <React.Fragment key={id}>
              <hr className="separator"/>
              <TripPreview tripId={id}/>
            </React.Fragment>
          )}
        </Grid>
      </div>
    );
  }
}

export default Trips;