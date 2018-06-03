import React, { Component } from "react";
import {Col, Row} from "react-bootstrap";
import CommitteeCard from "./CommitteeCard";

import "../../stylesheets/Committee.css"

// If we ever get a backend involved, move this to a DB.
const members = ["Harry", "Josh", "Ellie", "Martina", "Arran", "Dex", "Abi", "James"];

class Committee extends Component {
  render() {
    const cards = members.map(name => {
      return (
        <Col key={name} xs={12} sm={6} lg={3}>
          <CommitteeCard name={name}/>
        </Col>
      );
    });

    return (
      <div className="content">
        <div className="card-grid">
          <Row className="equal">
            {cards}
          </Row>
        </div>
      </div>
    );
  }
}

export default Committee;
