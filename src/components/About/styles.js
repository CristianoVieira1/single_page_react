import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  position: relative;
  display: flex;
  background: #fff;
`;

export const Container = styled.div`
  padding: 2rem calc((100vw - 1399px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColunmLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  /* max-width: 30rem; */
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #6e6e6e;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 2rem);
    color: #000;
    font-weight: 700;
  }

  p {
    margin-bottom: 2rem;
    color: #8b8b8b;
  }
`;

export const ColunmRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
