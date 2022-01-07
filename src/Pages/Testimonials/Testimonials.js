import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";
import girl from "../../img/girl(1).png";
const Testimonials = () => {
  return (
    <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <Container>
        <div>
          <Row className="bg-img">
            <Col>
              <div
                style={{
                  width: "472px",
                  height: "472px",
                  marginTop: "-3.5rem",
                }}
              >
                <img width="100%" src={girl} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <div style={{ marginTop: "6rem" }}>
                  <h2 style={{ fontWeight: "bold" }}>John Doe</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum, elit eu facilisis mauris. Eu viverra iaculis
                    nulla id euismod at. Viverra amet amet pellent
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
