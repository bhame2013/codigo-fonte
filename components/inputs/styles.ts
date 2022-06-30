import styled from "styled-components";

export const Input = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;

  label {
    color: rgb(178 173 192);
    text-align: left;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;
    background-color: rgb(234 232 238);
    width: 100%;
    transition: 0.3s;
  }

  .input-content {
    width: 100%;
    position: relative;

    input:focus + label {
      background-color: transparent;
      top: -2px;
      width: auto;

      span {
        display: block;
        transform: scale(0.9);
        margin-left: -5px;
      }
    }
  }

  .input-content.edit {
    label {
      top: 8px;
      transform: unset;
    }

    input:focus + label {
      background-color: transparent;
      top: 8px;
      width: unset;

      span {
        display: unset;
        transform: unset;
        margin-left: unset;
      }
    }

    label {
      opacity: 0.3;
      color: #000000;
      font-size: 12px;
      position: absolute;
    }

    input {
      height: 58px;
      padding-top: 23px;
    }
  }

  label.active {
    background-color: transparent;
    top: -2px;
    width: auto;

    span {
      display: block;
      transform: scale(0.9);
      margin-left: -5px;
    }
  }

  .input-content + *,
  .input-content + div + * {
    display: block;
  }

  input,
  textarea {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 20px;
    color: rgba(255, 255, 255, 1);
    border: 0;
  }

  input {
    height: 60px;
  }

  input:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }

  textarea {
    height: 226px;
    padding-top: 18px;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .eye {
    background-color: unset;
    border: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;

    svg {
      width: 20px;
      height: auto;
      color: var(--theme-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 18px;

    input,
    textarea {
      padding: 0 18px;
    }

    input {
      height: 57px;
    }

    textarea {
      height: 215px;
      padding-top: 17px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 17px;

    input,
    textarea {
      padding: 0 16px;
    }

    input {
      height: 54px;
    }

    textarea {
      height: 200px;
      padding-top: 16px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 16px;

    input,
    textarea {
      padding: 0 15px;
    }

    input {
      height: 52px;
    }

    textarea {
      height: 180px;
      padding-top: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 15px;

    input,
    textarea {
      padding: 0 14px;
    }

    input {
      height: 48px;
    }

    textarea {
      height: 160px;
      padding-top: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 13px;

    input,
    textarea {
      padding: 0 12px;
    }

    input {
      height: 44px;
    }

    textarea {
      height: 100px;
      padding-top: 12px;
    }
  }
`;

export const InputEdit = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(51, 33, 84, 0.1);
  position: relative;
  padding: 22px 50px 15px 20px;

  .label-text {
    opacity: 0.3;
    color: #332154;
    font-family: Graphie;
    font-size: 13px;
    font-weight: 300;
    position: absolute;
    top: 6px;
    left: 20px;
    margin: 0;
  }

  input {
    background-color: transparent;
    border: 0;
    color: var(--theme-color);
    width: 100%;
  }

  .editIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 23px;
    margin: 0;
    display: flex;

    svg {
      cursor: pointer;
      opacity: 0.3;
      transition: 0.3s;
    }
    svg:hover {
      opacity: 1;
    }
  }
`;

export const InputRadio = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  
  .error-message {
    margin-top: -5px;
  }
  .input-content {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
  }

  label {
    cursor: pointer;
  }

  input[type="radio"] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    background-color: #fff;
    transition: 0.3s;
  }

  input[type="radio"]:before {
    content: "";
    display: block;
    width: 58%;
    height: 58%;
    margin: 20% auto;
    border-radius: 50%;
  }
  input[type="radio"]:checked:hover {
    background-color: transparent;
  }
  input[type="radio"]:checked:before {
    background: #7731ff;
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
