import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
  border: none;
  background: ${({ primary }) => (primary ? "#cd6133" : "#010606")};
  padding: ${({ big }) => (big ? "14px 34px" : "12px 18px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 50px;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#cd6133;")};
    color: #010606;
  }
`;
