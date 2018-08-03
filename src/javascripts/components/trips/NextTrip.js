import React from "react";
import {Col, ProgressBar, Row, Well} from "react-bootstrap";
import boardmasters from "../../../images/boardmasters.png";

const now = 100;

const NextTrip = () => (
  <Well className="next-trip">
    <Row>
      <Col xs={8}>
        <h2>NEXT TRIP</h2>
        <h5>Our next trip will see us return to Star Surf Camp in <strong>Moliets,
          France</strong>. On the week we're going
          there's a special boardmasters takeover so expect surfing, live
          music and partying all week long!</h5>
        <hr/>
        <p><strong>Dates:</strong> 1st - 7th July</p>
        <p><strong>Price:</strong> £269</p>
        <p><strong>Hype level: </strong>
          <ProgressBar active striped bsStyle="success" now={now} label={`${now}%`}/>
        </p>
      </Col>
      <Col xs={4}>
        <img src={boardmasters} alt="Boardmasters"/>
      </Col>
    </Row>
  </Well>
);

export default NextTrip;