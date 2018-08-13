import {Component} from "react";
import React from "react";
import {Col, Image, Panel, Row} from "react-bootstrap";

import harry from "../../../images/harry.jpg"

class CommitteeCard extends Component {

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Harry</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Row className="card-content">
            <Col xs={4} className="card-left">
              <div className="flex-col">
                <div className="card-img">
                  <Image src={harry} alt="Harry" circle/>
                </div>
                <p><strong>Position</strong><br/>President</p>
                <p><strong>Degree</strong><br/>Computing</p>
              </div>
            </Col>
            <Col xs={8}>
              <p>I’m a fully qualified wizard, an eclectic pineapple connoisseur
                and a firm believer that it is NOT possible to grow boneless chickens.
                You’ll most commonly find me being an utter moron in the student union,
                Newquay or sometimes even further afield. Not the best surfer by
                any measure, but in spite of my hungover cries that “we’ve all
                been surfing before”, I think all these trips might actually be
                starting to pay off. Looking forward to another great year.</p>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CommitteeCard;