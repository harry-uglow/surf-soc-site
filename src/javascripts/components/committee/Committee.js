import React from "react";
import { Row, Grid } from "react-bootstrap";

import "../../../stylesheets/Committee.css"
import CommitteeCards from "./CommitteeCards";

const Committee = () => (
  <div className="content">
    <Grid className="transparent">
      <Row className="equal">
        <CommitteeCards />
      </Row>
    </Grid>
  </div>
);

export default Committee;
