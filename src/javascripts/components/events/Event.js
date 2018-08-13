import React from "react";
import {Col, Image, Row, Well} from "react-bootstrap";
import fresh from "../../../images/fresh.jpg";

import '../../../stylesheets/Events.css';

const events = {
  freshFair18: {
    title: "Freshers Fair",
    description: "Come and meet the new committee and find out what's in store" +
    " from Surf Soc this year. Plus, a chance to win a free Freshers Trip ticket!!" +
    " (Probably a lie)",
    date: "2nd October",
    where: "Queens Lawn",
  },
  off18: {
    title: "Ocean Film Festival",
    description: "Featuring films such as X, Y and Z, the Ocean Film Festival is always " +
    "a nice and chilled out evening in the midst of the hectic start to the year.",
    date: "12th October",
    where: "Union Chapel, Islington",
  },
  firstCSP18: {
    title: "Sports Night",
    description: "It's the first sports night of the year, and that means the first surf party! " +
    "This one's always mental so join us for pre-drinks from 7:30 before we head to the union to " +
    "get waaaveeeyyyy!",
    date: "3rd October",
    where: "Metric, 568 & Union bar"
  },
  VGBs18: {
    title: "Vengaboys in Metric!",
    description: "Just kidding, this one is very much a placeholder (they all are really). But " +
    "wouldn't that be great, we can dream ok!",
    date: "TBA",
    where: "Metric"
  },
};

const Event = ({ eventId = "freshFair18" }) => (
  <Col sm={6} className="event-col">
    <Well className="event">
      <p className="event-title">{events[eventId].title}</p>
      <Row className="event-details">
        <Col xs={6} className="event-details-text">
          <p className="event-description">{events[eventId].description}</p>
          <p className="event-date"><strong>Date: </strong>{events[eventId].date}</p>
        </Col>
        <Col xs={6} className="well-image">
          <Image src={fresh} rounded alt="Freshers Fair"/>
        </Col>
      </Row>
    </Well>
  </Col>
);

export default Event;