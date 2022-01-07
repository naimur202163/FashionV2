import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const OurStyle = () => {
  return (
    <div>
      <Container>
        <div style={{ marginLeft: "2rem" }}>
          <Row>
            <Col sm={12} lg={6}>
              <h2>OUR STYLE AND STUDIOS</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
        </div>
        {/*  Bar */}
        <div>
          <div>
            <Row>
              <Col lg={6}>
                <div
                  style={{
                    backgroundColor: "#E4BFA4",
                    height: "44px",
                    borderRadius: ".7rem",
                  }}
                >
                  <Row>
                    <Col>
                      <div
                        style={{
                          boxShadow: "3px 3px 3px gray",
                          height: "42px",
                          borderRadius: "0.7rem",
                        }}
                      >
                        <h5 className="p-1">Papadon</h5>
                      </div>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 2</h5>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 3</h5>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 4</h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* Part-2 */}
        <div className="my-3">
          <Row>
            <Col>
              <div>
                <img src="https://i.ibb.co/xqgJpS9/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
            {/* <Col>
              <div>
                <img
                  className="mx-auto d-block"
                  src="https://i.ibb.co/S5s7MG8/Group.png"
                  alt=""
                />{" "}
              </div>
            </Col> */}
            <Col>
              <div>
                <img src="https://i.ibb.co/WzPWjr8/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
            <Col>
              <div>
                <img src="https://i.ibb.co/J3FQwRq/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
            <Col>
              <div>
                <img src="https://i.ibb.co/dQJ4QTs/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
            <Col>
              <div>
                <img src="https://i.ibb.co/Ph2Mrpt/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
            <Col>
              <div>
                <img src="https://i.ibb.co/SQ9Ngbv/Mask-Group-1.png" alt="" />{" "}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurStyle;
