import React from "react";
import { Button } from "../Button";

import { Container, HeroWrapper, HeroContent, Btn } from "./styles";

const Shop = () => {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroContent>
            <h3>Free Delivery With</h3>
            <h1>PIZZA OF THE DAY</h1>
            <h3> Only 8.99 USD</h3>
            <Btn>
              <Button to="/shop" primary="true">
                CALL NOW
              </Button>
            </Btn>
          </HeroContent>
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Shop;
