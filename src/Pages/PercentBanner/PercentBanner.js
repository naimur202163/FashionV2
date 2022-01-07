import React from "react";
import { Container, Row } from "react-bootstrap";
import "./PercentBanner.css";
const PercentBanner = () => {
  return (
    <div>
      <Container>
        <Row></Row>
        <div style={{ width: "100%" }} className="percent"></div>
      </Container>
    </div>
  );
};

export default PercentBanner;
