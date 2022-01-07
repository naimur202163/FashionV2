import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../img/Rectangle 168.png";
import img2 from "../../img/Rectangle 61.png";
import img3 from "../../img/Rectangle 169.png";
import img4 from "../../img/Rectangle 59.png";
import img5 from "../../img/Rectangle 170.png";
import img6 from "../../img/Rectangle 64.png";
import img7 from "../../img/Rectangle 171.png";

const TopBanner = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col sm={12} md={5} lg={5}>
            <div style={{ width: "542px", height: "278px" }}>
              <img width="100%" src={img1} alt="" />
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div style={{ width: "346px", height: "278px" }}>
              <img width="100%" src={img2} alt="" />
            </div>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <div style={{ width: "538px", height: "278px" }}>
              <img width="100%" height="100%" src={img3} alt="" />
            </div>
          </Col>
        </Row>
        {/* Part-2 */}
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div style={{ width: "550px", height: "308px" }}>
              <img width="100%" height="100%" src={img4} alt="" />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div style={{ width: "463px", height: "308px" }}>
              <img width="100%" height="100%" src={img5} alt="" />
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div style={{ width: "324px", height: "308px" }}>
              <img width="100%" height="100%" src={img6} alt="" />
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div style={{ width: "208px", height: "308px" }}>
              <img width="100%" height="100%" src={img7} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
