import React from "react";
import { Col, Image, Row, Well } from "react-bootstrap";

import '../../../stylesheets/Events.css';

const formatDescr = description => (
  description.substring(0,4) === 'http'
    ? <a href={description}>{description}</a>
    : description
);

const Event = ({ event: { id, title, description, date, where, img } }) => (
  <Col sm={6} className="event-col">
    <Well className="custom event">
      <p className="event-title">{title}</p>
      <Row className="well-details">
        <Col md={6} mdPush={6} className="well-image">
          <Image src={img} rounded alt={title}/>
        </Col>
        <Col md={6} mdPull={6} className="well-details-text">
          <p className="event-description">{description.map(formatDescr)}</p>
          {date ? <p className="event-info"><strong>Date: </strong>{date}</p> : null}
          {where ? <p className="event-info"><strong>Where: </strong>{where}</p> : null}
        </Col>
      </Row>
    </Well>
  </Col>
);

export default Event;