import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  button {
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background-color: var(--theme-color-light);
    color: #fff;
    border: 1px solid var(--theme-color-light);
    margin: 0 10px;
  }

  button.active {
    background-color: #fff;
    color: var(--theme-color-light);
  }
  span {
    color: #fff;
    cursor: pointer;
  }

  @media only screen and (max-width:1600px) {
    button {
      width: 52px;
      height: 52px;
    }
  }

  @media only screen and (max-width:1400px) {
    button {
      width: 50px;
      height: 50px;
    }
  }

  @media only screen and (max-width:1200px) {
    button {
      width: 48px;
      height: 48px;
    }
  }

  @media only screen and (max-width:1024px) {
    button {
      width: 46px;
      height: 46px;
    }
  }

  @media only screen and (max-width:768px) {
    button {
      width: 44px;
      height: 44px;
    }
  }

  @media only screen and (max-width:500px) {
    button {
      width: 42px;
      height: 42px;
    }
  }
`;
