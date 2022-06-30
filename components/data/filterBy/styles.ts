import styled from "styled-components";

export const Filter = styled.div`
  width: 100%;

  h3 {
    color: #fff;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    height: 54px;
    border-radius: 31px;
    text-align: left;
    padding: 0 20px;
    border: 1px solid var(--theme-color-light);
    background-color: transparent;
    color: #fff;
  }

  button.active {
    background-color: var(--theme-color-light);
  }

  * + * {
    margin-top: 10px;
  }

  @media only screen and (max-width:1600px) {
    button {
      height: 52px;
    }
  }

  @media only screen and (max-width:1400px) {
    button {
      height: 50px;
    }
  }

  @media only screen and (max-width:1200px) {
    button {
      height: 48px;
    }
  }
`;
