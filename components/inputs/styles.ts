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
    padding: 0 12px;
    line-height: 20px;
    color: #c9d1d9;
    vertical-align: middle;
    background-color: #0d1117;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #30363d;
    border-radius: 6px;
    font-size: 13px;
    min-width: 250px;
  }

  input {
    height: 38px;
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
    color: #c9d1d9;
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
      width: 15px;
      height: auto;
      color: #c9d1d9;
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
