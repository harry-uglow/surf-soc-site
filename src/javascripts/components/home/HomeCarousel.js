import React  from "react";
import {Component} from "react";
import {Carousel} from "react-bootstrap";

import "../../../stylesheets/HomeCarousel.css"

class HomeCarousel extends Component {

  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.carousel = React.createRef();
  }


  render() {
    const imgInfo = this.props.imgUrls;
    const carouselItems = imgInfo.urls.map((url, index) => {
      return (
        <Carousel.Item key={index}>
          <img alt={imgInfo.alts[index]} src={url} />
        </Carousel.Item>
      );
    });
    return (
      <Carousel className="carousel-fade" ref={this.carousel} indicators={false} controls={false} pauseOnHover={false} interval={null}>
        {carouselItems}
      </Carousel>
    );
  }

  next() {
    this.carousel.current.handleNext();
  }

  prev() {
    this.carousel.current.handlePrev();
  }
}

export default HomeCarousel;