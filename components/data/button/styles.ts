import styled from "styled-components";
import { lighten } from "polished";

interface ButtonProps {
  backgroundColor?: string;
  $loading?: boolean
}

export const Button = styled.div<ButtonProps>`
  a,
  button {
    width: 100%;
    height: 54px;
    border-radius: 50px;
    cursor: ${props => props.$loading ? 'not-allowed' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 0;
    transition: all 0.4s ease-in-out;
    background-size: 300% 100%;
    background-image: ${(props) =>
      props.backgroundColor
        ? `linear-gradient(to right, ${props.backgroundColor}, ${
            props.backgroundColor
          }, ${lighten(0.1, props.backgroundColor)}, ${props.backgroundColor})`
        : `linear-gradient(to right, #dc9300, #dc9300, ${lighten(
            0.1,
            "#dc9300"
          )} , #dc9300)`};
    animation: ${props => props.$loading ? 'loading 2s ease-in-out infinite' : 'unset'}
  }

  a:hover,
  button:hover {
    background-position: ${props => props.$loading ? 'unset' : '100% 0'};
    transition: all 0.4s ease-in-out;
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 48px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 44px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 42px;
    }
  }
`;
