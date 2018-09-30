import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";

const Events = () => (
  <div className="content">
    <Grid>
      <Row>
        <Col smHidden={true} mdHidden={true} lgHidden={true} className="event-header" xs={12}>
          <p className="event-title">Upcoming Events</p>
          <hr className="separator no-top"/>
        </Col>
      </Row>
      <UpcomingEvents />
      <hr className="separator no-top"/>
      <div className="section-inner">
        <div className="header">
          <h2>Past Events</h2>
          <h5>A brief reminder of some of last year's events you can expect to see again this year</h5>
        </div>
      </div>
      <PastEvents />
    </Grid>
  </div>
);

export default Events;