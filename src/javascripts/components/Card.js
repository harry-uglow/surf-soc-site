import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey={1}>
          Next Trip
        </NavItem>
        <NavItem eventKey={2}>
          Newquay May 2018
        </NavItem>
        <NavItem eventKey={3}>
          Portugal Tour 2018
        </NavItem>
      </Nav>
    );
  }
}

export default Card;