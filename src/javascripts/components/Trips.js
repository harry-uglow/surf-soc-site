import React, { Component } from "react";
import {Col, Grid, ProgressBar, Row, Well} from "react-bootstrap";

import "../../stylesheets/Trips.css"

class Trips extends Component {
  render() {
    const now = 100;
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12}>
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
                      <ProgressBar active striped bsStyle="success" now={now} label={`${now}%`} />
                    </p>
                  </Col>
                  <Col xs={4}>
                    <img src="images/boardmasters.png" alt="Boardmasters"/>
                  </Col>
                </Row>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Trips;