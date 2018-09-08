import React from "react";
import { Col, Image, Row, Well } from "react-bootstrap";
import fresh from "../../../images/fresh.jpg";

import '../../../stylesheets/Events.css';

const Event = ({ event: { id, title, description, date, where } }) => (
  <Col sm={6} className="event-col">
    <Well className="custom event">
      <p className="event-title">{title}</p>
      <Row className="well-details">
        <Col md={6} mdPush={6} className="well-image">
          <Image src={fresh} rounded alt={title}/>
        </Col>
        <Col md={6} mdPull={6} className="well-details-text">
          <p className="event-description">{description}</p>
          <p className="event-info"><strong>Date: </strong>{date}</p>
          <p className="event-info"><strong>Where: </strong>{where}</p>
        </Col>
      </Row>
    </Well>
  </Col>
);

export default Event;