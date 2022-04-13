import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  align-content: center;
  justify-content: center;
  align-items: center;
  /* width: calc(30% - 25px); */
  color: #fff;
  bottom: 1rem;

  h3 {
    font-size: clamp(2rem, 8vw, 1rem);
    margin-bottom: 1.8rem;
    /* font-size: 30px; */
    color: #ffffff;
    line-height: 35px;
    text-align: center;
    font-family: Montserrat;
    font-weight: 700;
    font-style: normal;
  }

  h1 {
    /* font-size: clamp(2.5rem, 8vw, 1rem);
    word-wrap: break-word;
    max-width: clamp(40rem, 4vw, 0.1rem);
    font-weight: 900;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left; */

    /* font-size: 40px; */
    font-size: clamp(2.5rem, 8vw, 1rem);
    color: #ffffff;
    line-height: 40px;
    text-align: center;
    font-family: Montserrat;
    font-weight: 700;
    font-style: normal;
    margin-bottom: 2rem;
  }

  p {
    max-width: clamp(2rem, 4vw, 0.1rem);
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: clamp(2rem, 8vw, 2rem);
    }
  }

  @media screen and (max-width: 536px) {
    h3 {
      font-size: clamp(1.4rem, 8vw, 1rem);
      margin-bottom: 1rem;
    }

    h1 {
      font-size: clamp(2rem, 8vw, 2rem);
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  margin-top: 24px;
`;
