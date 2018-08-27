import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

import Event from "./Event";
import { gql } from "apollo-boost/lib/index";
import { Query } from "react-apollo/react-apollo.browser.umd";

const Events = () => (
  <div className="content">
    <Grid className="thin">
      <Row>
        <Col smHidden={true} mdHidden={true} lgHidden={true} className="event-header" xs={12}>
          <p className="event-title">Upcoming Events</p>
          <hr className="separator no-top"/>
        </Col>
      </Row>
      <Query query={gql`{
        events @client {
          id
          title
          description
          date
          where
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
    </Grid>
  </div>
);

export default Events;