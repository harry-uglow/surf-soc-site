import React from "react";
import {Col, Row, Well} from "react-bootstrap";
import fresh from "../../../images/fresh.jpg";

import '../../../stylesheets/Event.css';


const Event = () => (
  <Well className="event">
    <Row>
      <Col xs={8}>
        <h2>Freshers Fair</h2>
        <h5>Come and meet the new committee and find out what's in store
        from Surf Soc this year. Plus, a chance to win a free Freshers Trip ticket!!
        (Probably a lie)</h5>
        <hr/>
        <p><strong>Date:</strong> 2nd October</p>
      </Col>
      <Col xs={4} className="well-image">
        <img src={fresh} alt="Freshers Fair"/>
      </Col>
    </Row>
  </Well>
);

export default Event;