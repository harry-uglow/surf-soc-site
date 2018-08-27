import React from "react";
import { Col, Image, Row, Well } from "react-bootstrap";
import fresh from "../../../images/fresh.jpg";

import '../../../stylesheets/Events.css';
import { gql } from "apollo-boost/lib/index";
import { Query } from "react-apollo/react-apollo.browser.umd";

const Event = ({ id }) => (
  <Query
    query={gql`query Event($id: String!) {
      events(id: $id) @client {
        title
        description
        date
        where
      }
    }`}
    variables={{ id }}
  >
    {({ loading, error, data: { events } }) =>
      loading ? <p>Loading...</p>
        : error ? <p>Error :(</p>
        : events.map(({ title, description, date, where }) => (
          <Col sm={6} className="event-col">
            <Well className="event">
              <p className="event-title">{title}</p>
              <Row className="event-details">
                <Col md={6} mdPush={6} className="well-image">
                  <Image src={fresh} rounded alt="Freshers Fair"/>
                </Col>
                <Col md={6} mdPull={6} className="event-details-text">
                  <p className="event-description">{description}</p>
                  <p className="event-info"><strong>Date: </strong>{date}</p>
                  <p className="event-info"><strong>Where: </strong>{where}</p>
                </Col>
              </Row>
            </Well>
          </Col>
        ))
    }
  </Query>
);

export default Event;