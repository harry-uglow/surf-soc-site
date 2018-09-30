import React from "react";
import { Query } from "react-apollo/react-apollo.browser.umd";
import { gql } from "apollo-boost";
import { Row } from "react-bootstrap";
import Event from "./Event";

const UpcomingEvents = () => (
  <Query query={gql`{
    events @client {
      id
      title
      description
      date
      where
      img
    }
  }`}>
    {({ loading, error, data: { events } }) =>
      loading ? <p>Loading...</p>
        : error ? <p>Error :(</p>
        : (<Row className="event-row">
            {events.map(event => <Event event={event}/>)}
          </Row>
        )
    }
  </Query>
);

export default UpcomingEvents;