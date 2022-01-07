import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../img/Mask Group7.png";
import img2 from "../../img/Mask Group3.png";
import img3 from "../../img/Mask Group5.png";
import img4 from "../../img/Mask Group.png";
const Conslatency = () => {
  return (
    <div>
      <Container>
        <div className="p-4">
          <Row>
            <Col lg={7} md={12} sm={12}>
              <h2 className="p-1 my-3">OUR CONSULTANCY</h2>
              <div>
                A successful fashion consultant should have excellent
                communication and interpersonal skills to interact with clients
                and should be friendly, outgoing, and trustworthy. Ultimately, a
                top-notch fashion consultant should be a good multitasker and a
                great listener, have good time management skills, and be highly
                organized.
              </div>
            </Col>
          </Row>
        </div>
        {/* Image Part */}
        <div className="my-5">
          <Row>
            <Col>
              <div>
                <img src={img1} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <img src={img2} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <img src={img3} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <img src={img4} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <img src={img3} alt="" />
              </div>
            </Col>
            <Col>
              <div>
                <img src={img2} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Conslatency;
