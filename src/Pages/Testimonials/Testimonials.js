import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";
import girl from "../../img/girl(1).png";
const Testimonials = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <Container>
        <div className="bg-img">
          <Row>
            <Col>
              <div style={{ width: "80%" }}>
                <div
                  style={{
                    width: "473px",
                    height: "473px",
                    padding: "16px",
                  }}
                >
                  <img
                    className="mx-auto d-block"
                    style={{
                      marginTop: "-3.5rem",
                      border: "1px solid gray",
                      borderRadius: "50%",
                    }}
                    src={girl}
                    alt=""
                  />
                </div>
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
