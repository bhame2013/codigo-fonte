import styled from "styled-components";

export const BreadCrumb = styled.ul`
  display: flex;
  align-items: center;

  a, span {
    color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
  }

  a:hover {
    color: rgba(255, 255, 255, 1);
  }

  li::after {
    content: ">";
    margin: 0 11px;
    color: rgba(255, 255, 255, 0.2);
    font-family: Graphie;
    font-size: 20px;
  }

  li:last-child::after {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    li::after {
      margin: 0 10px;
      font-size: 19px;
    }
  }

  @media only screen and (max-width: 1400px) {
    li::after {
      margin: 0 9px;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 1200px) {
    li::after {
      margin: 0 8px;
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 1024px) {
    li::after {
      margin: 0 7px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    li::after {
      margin: 0 6px;
      font-size: 15px;
    }
  }
`;
