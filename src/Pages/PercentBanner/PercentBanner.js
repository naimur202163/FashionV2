import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PercentBanner.css";
const PercentBanner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div style={{ width: "100%" }} className="percent"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PercentBanner;
