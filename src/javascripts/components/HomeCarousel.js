import React  from "react";
import {Component} from "react";
import {Carousel} from "react-bootstrap";

class HomeCarousel extends Component {

  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.carousel = React.createRef();
  }


  render() {
    const carouselItems = this.props.imgUrls.map((url, index) => {
      return (
        <Carousel.Item key={index}>
          <img alt={url} src={url} />
        </Carousel.Item>
      );
    });
    return (
      <Carousel ref={this.carousel} indicators={false} controls={false} pauseOnHover={false} interval={null}>
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