import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 30px 0;
  background-color: #fff;

  h3 {
    text-transform: uppercase;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 66, 1) 0%,
      rgba(9, 9, 121, 1) 100%
    );
    color: var(--primary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
