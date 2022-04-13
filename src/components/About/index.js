import React from "react";
import { Button } from "../Button";

import { Section, Container, ColunmLeft, ColunmRight } from "./styles";

const index = ({ paragraph, about, reverse, image, buttonLabel }) => {
  return (
    <Section>
      <Container>
        <ColunmLeft>
          <h3>{about}</h3>
          <h1>
            WELCOME TO <br /> MAESTRO BURGER
          </h1>
          <p>{paragraph}</p>
          <Button to="/about" primary="true">
            {buttonLabel}
          </Button>
        </ColunmLeft>
        <ColunmRight reverse={reverse}>
          <img src={image} alt="About" />
        </ColunmRight>
      </Container>
    </Section>
  );
};

export default index;
