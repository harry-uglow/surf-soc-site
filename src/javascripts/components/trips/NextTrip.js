import React from "react";
import { Col, Image, ProgressBar, Row, Well } from "react-bootstrap";
import { formatDescr, secondsToString } from "../../utils";
import { gql } from "apollo-boost/lib/index";
import { Query } from "react-apollo/react-apollo.browser.umd";

const insertReleaseLine = release => release ? <p><strong>Release:</strong> {release}</p> : null;
  
class NextTrip extends React.Component {

  constructor() {
    super();
    this.state = { time: Math.floor(new Date().getTime() / 1000) };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  render() {
    return <React.Fragment>
    <Query query={gql`{
        futureTrips @client {
          id
          header
          date
          release
          price
          where
          text
          start
          end
          image
          timeUp
          style
        }
      }`}>
        {({ loading, error, data: { futureTrips } }) =>
          loading ? <p>Loading...</p>
            : error ? <p>Error :(</p>
            : futureTrips.map(({ id, header, date, release, price, where, text, start, end, timeUp, image, style }) => {
              return (
                <Well className="custom next-trip">
                  <Col smHidden mdHidden lgHidden>
                    <p className={"event-title"}>{header}</p>
                  </Col>
                  <Row className="well-details">
                    <Col sm={6} smPush={6} md={5} mdPush={7} className="well-image">
                      <span className="helper" />
                      <Image id="next-trip" src={image} rounded alt={id}/>
                    </Col>
                    <Col sm={6} smPull={6} md={7} mdPull={5} className="well-details-text">
                      <Col xsHidden>
                        <p className={"event-title"}>{header}</p>
                      </Col>
                      <p className="next-trip-descr">{text.map(formatDescr)}</p>
                      <br/>
                      <p><strong>Dates:</strong> {date}</p>
                      <p><strong>Where:</strong> {where}</p>
                      <p><strong>Price:</strong> {price}</p>
                      {insertReleaseLine(release)}
                      <div className="hype">
                        <div className="hype-text">
                          <strong>Countdown: </strong>
                        </div>
                        <div className="hype-bar">
                          <ProgressBar
                            active striped bsStyle={style} now={Math.floor((this.state.time - start) / (end - start) * 100)}
                            label={(end - this.state.time > 0 ? secondsToString(end - this.state.time) : timeUp)}/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Well>
              );
            })
        }
      </Query>
      <hr className="separator"/>
    </React.Fragment>
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let time = this.state.time + 1;
    this.setState({
      time,
    });
  }
}

export default NextTrip;