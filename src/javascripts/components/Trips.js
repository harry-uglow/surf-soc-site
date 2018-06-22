import React, { Component } from "react";
import {Col, Grid, Row} from "react-bootstrap";
import NextTrip from "./NextTrip";

import "../../stylesheets/Trips.css"

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

        </Grid>
      </div>
    );
  }
}

export default Trips;