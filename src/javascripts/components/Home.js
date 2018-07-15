import React  from "react";
import {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";

import '../../stylesheets/Home.css';
import {sleep} from "../utils";

import baleal from "../../images/baleal.jpg";
import group_cliff from "../../images/group_cliff.jpg";
import boards from "../../images/boards.jpg";
import joash from "../../images/joashred.JPG";
import estella from "../../images/estella.JPG";
import flo from "../../images/flo.JPG";
import filip_surf from "../../images/filip_surf.JPG";
import POON from "../../images/POON.JPG";
import mellie from "../../images/mellie.jpg";
import portugal_lunch from "../../images/portugal_lunch.jpg";
import logo from "../../images/surf_logo.png"

const TRANSITION_DELAY = 1250;
const topRightUrls = [
  baleal,
  group_cliff,
  boards
];

const topLeftUrls = [
  joash,
  estella
];

const bottomRightUrls = [
  flo,
  filip_surf,
  POON
];

const bottomLeftUrls = [
  mellie,
  portugal_lunch
];

class Home extends Component{

  async transition() {
    this.carousels[0].current.next();
    await sleep(TRANSITION_DELAY);
    this.carousels[1].current.next();
    await sleep(TRANSITION_DELAY);
    this.carousels[2].current.next();
    await sleep(TRANSITION_DELAY);
    this.carousels[3].current.next();
    this.timeout = setTimeout(this.transition, 5000);
  }

  constructor(props) {
    super(props);

    this.carousels = [React.createRef(), React.createRef(),
                      React.createRef(), React.createRef()]
    this.transition = this.transition.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.transition, 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="home-content">
        <div id="surf-logo">
          <img src={logo} alt=""/>
        </div>
      <Grid className="carousel-container">
        <Row>
          <Col xs={12} md={6} className="carousel-col">
            <HomeCarousel ref={this.carousels[0]} imgUrls={topLeftUrls}/>
          </Col>
          <Col xs={12} md={6} className="carousel-col">
            <HomeCarousel ref={this.carousels[1]} imgUrls={topRightUrls}/>
          </Col>
          <Col xs={12} md={6} className="carousel-col">
            <HomeCarousel ref={this.carousels[2]} imgUrls={bottomLeftUrls}/>
          </Col>
          <Col xs={12} md={6} className="carousel-col">
            <HomeCarousel ref={this.carousels[3]} imgUrls={bottomRightUrls}/>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Home;