import {Component} from "react";
import React from "react";
import {Image, Media, Panel} from "react-bootstrap";

import "../../../stylesheets/CommitteeCard.css"
import harry from "../../../images/harry.JPG"

class CommitteeCard extends Component {

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Harry</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Media>
            <Media.Left className="card-pic">
              <Image src={harry} alt="Harry" circle/>
            </Media.Left>
            <Media.Body>
              <p><strong>Role:</strong> President</p>
              <p><strong>Degree:</strong> Computing</p>
              <p><strong>Fun fact:</strong> "I have accidentally become known
                for bringing pineapples to the union."</p>
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CommitteeCard;