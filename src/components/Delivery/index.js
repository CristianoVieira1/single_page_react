import React from "react";
import { Button } from "../Button";

import { Section, Container, ColunmLeft, ColunmRight } from "./styles";

const Delivery = ({ paragraph, about, reverse, image, buttonLabel }) => {
  return (
    <Section>
      <Container>
        <ColunmRight reverse={reverse}>
          <img src={image} alt="About" />
        </ColunmRight>
        <ColunmLeft>
          <h3>{about}</h3>
          <h1>
            CHICAGO <br /> THIN CRUST
          </h1>
          <p>{paragraph}</p>
          <Button to="/about" primary="true">
            {buttonLabel}
          </Button>
        </ColunmLeft>
      </Container>
    </Section>
  );
};

export default Delivery;
