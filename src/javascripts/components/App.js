import React from 'react';
import Home from "./home/Home";
// import About from "./About";
import Trips from "./trips/Trips";
import Committee from "./committee/Committee";
import Events from "./events/Events";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { ApolloProvider } from "react-apollo";
import { client } from "../../index";
import TripRoutes from "./trips/TripRoutes";

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter basename="/acc/surf">
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/about" component={About}/>*/}
        <Route exact path="/trips" component={Trips}/>
        <Route path="/committee" component={Committee}/>
        <Route path="/events" component={Events}/>
        <TripRoutes />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;