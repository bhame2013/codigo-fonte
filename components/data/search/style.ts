import styled from "styled-components";
import { Form } from "@unform/web";

export const Search = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 38px;
  justify-content: flex-start;
  padding: 0 0 0 8px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;

  > div {
    width: calc(100% - 25px);
  }

  .search-button-action {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    width: 13px;
    margin-right: 5px;
    padding: 0;
    display: flex;

    svg {
      max-width: 100%;
      fill: #fff;
      transition: 0.3s;
      opacity: 0.85;
    }
  }

  .search-button-action:disabled {
    cursor: not-allowed;

    svg {
      opacity: 0.3;
    }
  }

  .search-button-action:hover:not(:disabled) {
    svg {
      transform: rotate(10deg);
      transition: 0.3s;
      opacity: 1;
    }
  }

  input {
    width: 100%;
    height: 30px;
    background-color: transparent;
    padding: 0 20px 0 10px;
    color: #fff;
    border: 0;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .reestart {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 15px;
    width: auto;
    background-color: transparent;
    border: 0;
    padding: 0;
    display: flex;

    svg {
      height: inherit;
      fill: #fff;
      width: auto;

    }
  }


`;
