import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Lorem.css";
const Lorem = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <div className="bg-images">
              <div className="text-center ">
                <div className="pt-5">
                  <h2>“Lorem Ipsum is simply dummy”</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                    <br />
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text
                    <br />
                    ever since the 1500s, when an unknown printer took a galley
                    of type and
                    <br /> scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button
                  style={{
                    width: "360px",
                    height: "68px",
                    backgroundColor: "#ECE0D1",
                    fontWeight: "bold",
                    border: "0px",
                    boxShadow: "2px 2px",
                  }}
                >
                  Write your message here
                </button>
              </div>
              <div className="text-center">
                <button
                  style={{
                    marginTop: "1rem",
                    width: "89px",
                    height: "36px",
                    backgroundColor: "#FFF8F5",
                    fontWeight: "bold",
                    border: "0px",
                    borderRadius: "10%",
                  }}
                >
                  send
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lorem;
