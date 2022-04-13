import React from "react";
import {
  Container,
  HeroImage,
  HeroWrapper,
  NavBtn,
  HeroContent,
} from "./styles";
import { Button } from "../Button";
import Bg from "../../assets/images/bg.jpg";

const Header = () => {
  return (
    <>
      <HeroImage src={Bg} alt="Banner" />
      <Container>
        <HeroWrapper>
          <HeroContent>
            <h3>Burger Delivery</h3>
            <h1>MAESTRO BURGER</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eius qui eligendi quam veniam, mollitia rem.
            </p>
            <NavBtn>
              <Button to="/shop" primary="true">
                DELIVERY NOW
              </Button>
            </NavBtn>
          </HeroContent>
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Header;
