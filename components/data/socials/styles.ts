import styled from "styled-components";

interface Props {
  $loading?: boolean;
}

export const ButtonSocial = styled.div<Props>`
  button {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem;
    margin-right: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    min-width: 229px;
    cursor: ${props => props.$loading ? "not-allowed" : "pointer"};

    svg {
      margin-right: 0.75rem;
    }

    span {
      line-height: 1.125rem;
    }
  }

  .google {
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    background-color: ${props => props.$loading ?  "var(--primary-color)" : "#fff"};
    svg {
      fill: var(--primary-color);
    }
  }

  .google:hover {
    color: #fff;
    background-color: var(--primary-color);

    svg {
      fill: #fff;
    }
  }
`;
