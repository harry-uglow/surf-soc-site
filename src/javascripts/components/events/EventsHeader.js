import React from "react";
import {Col, Row} from "react-bootstrap";

const EventsHeader = () => (
    <Row className="eventsHeader">
      <Col xs={8}>
        <h2>EVENTS</h2>
        <h5>Welcome to our public events page. We'll use it to list socials,
        parties and other important dates. The rule is: if you can see it,
        you're invited! Hope to see you at one of our events soon!</h5>
        <hr/>
      </Col>
    </Row>
);

export default EventsHeader;