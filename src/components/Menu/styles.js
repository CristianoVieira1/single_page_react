// import styled from "styled-components";

// export const Container = styled.div`
//   height: 50vh;
//   max-height: 1100px;
//   position: relative;
//   overflow: hidden;
//   justify-content: center;
//   align-items: center;
//   background: #262626;
//   display: flex;
//   padding: 1rem 5rem;
// `;

// export const HeroWrapper = styled.div`
//   top: -2rem;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
// `;
// export const HeroContent = styled.div`
//   position: relative;
//   z-index: 10;
//   display: flex;
//   flex-direction: center;
//   max-width: 1600px;
//   align-content: space-between;
//   justify-content: center;
//   align-items: center;
//   /* width: calc(40% - 30px); */
//   color: #fff;
//   bottom: 1rem;

//   h2 {
//     margin: 0 4rem;
//     display: block;
//     font-size: 60px;
//     font-weight: 600;
//     line-height: 60px;
//     margin-top: 10px;
//     text-align: center;
//   }
// `;

// export const HeroWrapperOn = styled.div`
//   top: -2rem;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
// `;
// export const HeroContentOn = styled.div`
//   top: 5rem;
//   position: relative;
//   z-index: 10;
//   display: flex;
//   flex-direction: center;
//   max-width: 1600px;
//   align-content: space-between;
//   justify-content: center;
//   align-items: center;
//   /* width: calc(40% - 30px); */
//   color: #fff;
//   bottom: 1rem;

//   p {
//     margin: 0 2rem;
//     display: block;
//     font-size: 30px;
//     font-weight: 600;
//     line-height: 60px;
//     margin-top: 10px;
//     text-align: center;
//   }
// `;

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  height: 50vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background: #262626;
  display: flex;
  padding: 1rem 5rem;

  @media screen and (max-width: 468px) {
    padding: 1rem 1rem;
  }
`;

export const NavLink = css`
  color: #fff;
  display: block;
  align-items: center;
  padding: 0 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  height: 100%;
  text-decoration: none;
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

  h2 {
    font-size: 7em;
    margin: 0 2rem 2rem 2rem;
  }

  span {
    margin: 0 0 2rem 1.7rem;
    display: flex;
    font-size: 1.2em;
  }
`;
