import React from "react";
import { Container } from "react-bootstrap";
import flag from "../../img/flg.png";
import "./Flag.css";
const Flag = () => {
  return (
    <div>
      <Container>
        <div className="my-5">
          <img width="100%" src={flag} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Flag;
