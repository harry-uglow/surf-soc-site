import React from "react";
import { Col, Image, Panel, Row } from "react-bootstrap";

import { gql } from "apollo-boost";
import { Query } from "react-apollo/react-apollo.browser.umd";

const CommitteeCards = () => {
  return (
    <Query query={gql`{
      committee @client {
        name
        position
        degree
        description
        img
      }
    }`}>
      {({ loading, error, data: { committee } }) =>
        loading ? <p>Loading...</p>
          : error ? <p>Error :(</p>
          : committee.map(({ name, position, degree, description, img }) => (
            <Col key={name} xs={12} md={6}>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Row className="card-content">
                    <Col xs={6} md={4} className="card-left">
                      <div className="flex-col">
                        <div className="card-img">
                          <Image src={img} alt={name} circle/>
                        </div>
                        <p><strong>Position</strong><br/>{position}</p>
                        <p><strong>Degree</strong><br/>{degree}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={8}><p>{description}</p></Col>
                  </Row>
                </Panel.Body>
              </Panel>
            </Col>
          ))
      }
    </Query>
  );
};

export default CommitteeCards;