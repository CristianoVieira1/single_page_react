import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
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

export const HeroImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const NavBtn = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  bottom: 1rem;

  h3 {
    font-size: clamp(3.5rem, 8vw, 1rem);
    margin-bottom: 2rem;
  }

  h1 {
    font-size: clamp(4rem, 8vw, 1rem);
    word-wrap: break-word;
    max-width: clamp(40rem, 4vw, 0.1rem);
    font-weight: 900;
    /* text-transform: uppercase; */
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
  }

  p {
    margin-bottom: 1.2rem;
    max-width: clamp(30rem, 4vw, 0.1rem);
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: clamp(5rem, 8vw, 2rem);
    }
  }

  @media screen and (max-width: 536px) {
    h3 {
      font-size: clamp(2rem, 8vw, 1rem);
      margin-bottom: 1rem;
    }

    h1 {
      font-size: clamp(2rem, 8vw, 2rem);
    }
  }
`;
