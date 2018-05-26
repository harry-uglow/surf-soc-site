import React, { Component } from 'react';
import Home from "./Home";
import About from "./About";
import Trips from "./Trips";
import Committee from "./Committee";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";

import "../../stylesheets/App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/trips" component={Trips}/>
          <Route path="/committee" component={Committee}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;