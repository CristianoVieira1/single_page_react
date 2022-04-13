import React from "react";
import { MenuNumber } from "../../data/index";

import {
  Container,
  HeroWrapper,
  HeroContent,
  NavMenu,
  NavMenuLinks,
} from "./styles";

const Menu = () => {
  return (
    <>
      <Container>
        <NavMenu>
          {MenuNumber.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              <h2>{item.title}</h2>
              <span>{item.subtitle}</span>
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Container>
    </>
  );
};

export default Menu;
