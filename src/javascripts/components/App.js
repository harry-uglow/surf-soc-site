import React, { Component } from 'react';
import Home from "./home/Home";
// import About from "./About";
import Trips from "./trips/Trips";
import Committee from "./committee/Committee";
import Events from "./events/Events";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import TripFull from "./trips/TripFull";

const recentTrips = ["moliets18", "portugal18"];

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/acc/surf">
        <div>
          <Header/>
            <Route exact path="/" component={Home}/>
            {/*<Route path="/about" component={About}/>*/}
            <Route exact path="/trips" component={Trips}/>
            <Route path="/committee" component={Committee}/>
            <Route path="/events" component={Events}/>
          {recentTrips.map(tripId =>
            <Route path={"/trips/" + tripId}
                   render={(props) => <TripFull {...props} tripId={tripId}/>}
            />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;