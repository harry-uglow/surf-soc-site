import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";

import Event from "./Event";

const events = ["freshFair18", "off18", "firstCSP18", "VGBs18"];

class Events extends Component {
  render() {
    let eventPairs = [];
    events.forEach((event, index) => (index % 2 === 0)
      ? eventPairs.push([event, events[index + 1]])
      : null
    );
    return (
      <div className="content">
        <Grid className="thin">
          <Row>
            <Col smHidden={true} mdHidden={true} lgHidden={true} className="event-header" xs={12}>
              <p className="event-title">Upcoming Events</p>
              <hr className="separator no-top" />
            </Col>
          </Row>
          {eventPairs.map(eventPair => (
            <Row className="event-row">
              <Event id={eventPair[0]}/>
              {eventPair[1] ? <Event id={eventPair[1]}/> : <div/>}
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Events;