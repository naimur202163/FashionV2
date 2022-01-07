import React from "react";
import { Container } from "react-bootstrap";
import flag from "../../img/flag.png";
import "./Flag.css";
const Flag = () => {
  return (
    <div>
      <Container>
        <div className="bg-flag"></div>
      </Container>
    </div>
  );
};

export default Flag;
