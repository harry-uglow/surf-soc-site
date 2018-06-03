import {Component} from "react";
import React from "react";
import {Image, Media, Panel} from "react-bootstrap";

import "../../stylesheets/CommitteeCard.css"

class CommitteeCard extends Component {

  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Harry</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div>
          <Media>
            <Media.Left>
              <Image src="images/IMG_3806.JPG" alt="Harry" circle/>
            </Media.Left>
            <Media.Body>
              <p><strong>Role:</strong> President</p>
              <p><strong>Degree:</strong> Computing</p>
              <p><strong>Fun fact:</strong> "I have accidentally become known
                for bringing pineapples to the union.</p>
            </Media.Body>
          </Media>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CommitteeCard;