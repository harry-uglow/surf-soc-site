import React from "react";
import { Route } from "react-router-dom";
import TripFull from "./TripFull";
import { gql } from "apollo-boost";
import { Query } from "react-apollo/react-apollo.browser.umd";


const TripRoutes = () => (
  <Query query={gql`{
      trips @client {
        id
      }
    }`}>
    {({ data }) =>
      data ? data.trips.map(({ id }) =>
        <Route key={id} path={"/trips/" + id}
               render={(props) => <TripFull {...props} id={id} />}
        />
      ) : null
    }
  </Query>
);

export default TripRoutes;