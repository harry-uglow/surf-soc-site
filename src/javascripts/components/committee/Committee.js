import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import CommitteeCard from "./CommitteeCard";

import "../../../stylesheets/Committee.css"

// If we ever get a backend involved, move this to a DB.
const members = ["Harry", "Josh", "Ellie", "Martina", "Arran", "Dex", "Abi", "James"];

class Committee extends Component {
  render() {
    const cards = members.map(name => {
      return (
        <Col key={name} xs={12} sm={6}>
          <CommitteeCard name={name}/>
        </Col>
      );
    });

    return (
      <div className="content">
        <Grid className="thin">
          <Row className="equal">
            {cards}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Committee;
