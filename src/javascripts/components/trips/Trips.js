import React, {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";
import NextTrip from "./NextTrip";
import TripPreview from "./TripPreview";

import "../../../stylesheets/Trips.css";

const recentTrips = ["moliets18"];

class Trips extends Component {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12}>
              <NextTrip/>
            </Col>
          </Row>
          {recentTrips.map(id =>
              <React.Fragment>
                <hr/>
                <Row>
                  <Col xs={12}>
                    <TripPreview tripId={id} />
                  </Col>
                </Row>
              </React.Fragment>
          )}

        </Grid>
      </div>
    );
  }
}

export default Trips;