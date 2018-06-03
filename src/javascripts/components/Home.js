import React  from "react";
import {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";

import '../../stylesheets/Home.css';
import {sleep} from "../utils";

const TRANSITION_DELAY = 1250;
const topRightUrls = [
  "/images/baleal.jpg",
  "images/group_cliff.JPG",
  "images/boards.jpg"
];

const topLeftUrls = [
  "images/joashred.JPG",
  "images/estella.JPG"
];

const bottomRightUrls = [
  "images/flo.JPG",
  "images/filip_surf.JPG",
  "images/POON.JPG"
];

const bottomLeftUrls = [
  "images/mellie.jpg",
  "images/portugal_lunch.jpg"
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
          <img src="images/surf_logo.png" alt=""/>
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