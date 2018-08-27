import React from "react";
import {Col, ProgressBar, Row, Well} from "react-bootstrap";
import bucs from "../../../images/bucs.jpg";
import { secondsToString } from "../../utils";

const hypeStart = 1531353600;
const bucsStart = 1539280800;

class NextTrip extends React.Component {

  constructor() {
    super();
    this.state = { secondsFromNow: 0, hypeLevel: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  render() {
    return this.state.secondsFromNow > 0 ? (
      <React.Fragment>
        <Well className="next-trip">
          <Row>
            <Col xs={7}>
              <h2>NEXT TRIP</h2>
              <h5>Our next weekender will see us finally return to Newquay for the first time since March
                to take on other unis in the <strong>BUCS Surf Championships</strong>! Expect
                to see some awesome surfing (as well as some not so good surfing) and
                party with other unis over a three-day weekend trip. Also wizard's staff.
              </h5>
              <br/>
              <p><strong>Dates:</strong> 11th - 14th October</p>
              <p><strong>Price:</strong> £45</p>
              <div className="hype">
                <div className="hype-text">
                  <strong>Countdown: </strong>
                </div>
                <div className="hype-bar">
                  <ProgressBar
                    active striped bsStyle="success" now={this.state.hypeLevel}
                    label={secondsToString(this.state.secondsFromNow)}/>
                </div>
              </div>
            </Col>
            <Col xs={5} className="well-image">
              <img src={bucs} alt="Boardmasters"/>
            </Col>
          </Row>
        </Well>
        <hr className="separator"/>
      </React.Fragment>
    ) : null
  }

  componentDidMount() {
    const now = new Date().getTime() / 1000;
    this.setState({
      secondsFromNow: bucsStart - now,
      hypeLevel: Math.floor((now - hypeStart) / (bucsStart - hypeStart) * 100),
    });

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
    let seconds = this.state.secondsFromNow - 1;
    this.setState({
      secondsFromNow: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
}

export default NextTrip;