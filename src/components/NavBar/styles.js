import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";
import Bars from "../../assets/images/bars.svg";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 468px) {
    padding: 1rem 1rem;
  }
`;

export const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 870px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${shade(0.1, "#ff454f")};
  }
`;

export const Logo = styled(Link)`
  ${NavLink}

  img {
    max-width: 220px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
