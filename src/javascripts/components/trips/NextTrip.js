import React from "react";
import {Col, ProgressBar, Row, Well} from "react-bootstrap";
import boardmasters from "../../../images/boardmasters.png";

const hypeStart = 1531353600;
const bucsStart = 1539302400;

const NextTrip = () => {
  const hypeLevel = Math.floor(((new Date().getTime() / 1000) - hypeStart) / (bucsStart - hypeStart) * 100);
  return (
    <Well className="next-trip">
      <Row>
        <Col xs={7}>
          <h2>NEXT TRIP</h2>
          <h5>Our next see us finally return to Newquay for the first time since March
            to take on other unis in the <strong>BUCS Surf Championships</strong>! Expect
            to see some awesome surfing (as well as some not so good surfing) and
            party with other unis over a three-day weekend trip. Also wizard's staff.
          </h5>
          <br/>
          <p><strong>Dates:</strong> 11th - 15th October</p>
          <p><strong>Price:</strong> TBC</p>
          <div className="hype">
            <div className="hype-text">
              <strong>Hype level: </strong>
            </div>
            <div className="hype-bar">
              <ProgressBar active striped bsStyle="success" now={hypeLevel} label={`${hypeLevel}%`}/>
            </div>
          </div>
        </Col>
        <Col xs={5} className="well-image">
          <img src={boardmasters} alt="Boardmasters"/>
        </Col>
      </Row>
    </Well>
  )
};

export default NextTrip;