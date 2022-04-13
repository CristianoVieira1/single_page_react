import React from "react";
import { menuData } from "../../data/index";
import BgLogo from "../../assets/images/logo.png";

import { Nav, NavMenu, NavMenuLinks, Logo, MenuBars } from "./styles";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <Logo>
        <img src={BgLogo} alt="Logo" />
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
