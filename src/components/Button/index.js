import styled from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#ff454f" : "ff454f")};
  white-space: nowrap;
  outline: none;
  border-radius: 50px;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
    background: ${shade(0.2, "#ff454f")};
    color: ${shade(0.2, "#fff")};
  }
`;
