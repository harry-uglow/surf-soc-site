import React, { Component } from "react";
import {Grid, Row} from "react-bootstrap";

import EventsHeader from "./EventsHeader";
import Event from "./Event";

const events = ["freshfair"];

class Trips extends Component {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <EventsHeader/>
          </Row>
          <Row>
            {events.map(eventId => <Event eventId={eventId}/>)}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Trips;