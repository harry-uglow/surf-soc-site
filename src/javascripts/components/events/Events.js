import React, { Component } from "react";
import {Grid, Row} from "react-bootstrap";

// import EventsHeader from "./EventsHeader";
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
          {/*<Row>*/}
            {/*<EventsHeader/>*/}
          {/*</Row>*/}
          {eventPairs.map(eventPair => (
            <Row className="event-row">
              <Event eventId={eventPair[0]}/>
              {eventPair[1] ? <Event eventId={eventPair[1]}/> : <div/>}
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Events;