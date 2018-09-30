import React from "react";
import { Query } from "react-apollo/react-apollo.browser.umd";
import { gql } from "apollo-boost";
import { Row } from "react-bootstrap";
import Event from "./Event";

const PastEvents = () => (
  <Query query={gql`{
    pastEvents @client {
      id
      title
      description
      img
    }
  }`}>
    {({ loading, error, data: { pastEvents } }) =>
      loading ? <p>Loading...</p>
        : error ? <p>Error :(</p>
        : (<Row className="event-row">
            {pastEvents.map(event => <Event event={event}/>)}
          </Row>
        )
    }
  </Query>
);

export default PastEvents;