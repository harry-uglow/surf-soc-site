import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import About from "./About";
import Trips from "./Trips";
import Committee from "./Committee";
import '../../stylesheets/App.css';
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/trips" component={Trips}/>
            <Route path="/committee" component={Committee}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
