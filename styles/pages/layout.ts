import styled from "styled-components";

export const Layout = styled.div`
  header {
    margin-bottom: 7vh;
  }

  .sidebar {
    padding: 0 1rem;
    height: calc(100vh - 7vh - 63.55px);
    overflow: auto;
    width: 300px;
    margin-right: 40px;

    .default-value {
      color: #fff;
      text-align: center;
      padding: 0 25px;
      margin: 0;
    }

    * + ul {
      font-size: 97%;
    }

    h3 {
      color: #fff;
      margin-bottom: 1.15rem;
    }

    a {
      color: #fff;
      display: inline-block;
    }

    .categories {
      padding-left: 0;

      .father {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          margin-right: 14px;
          transition: 0.3s;
        }

        span {
          font-size: 15px;
          color: #fff;
        }
      }

      > li {
        margin-bottom: 18px;
      }

      ul {
        > li {
          margin-top: 10px;
        }
      }

      .father + ul {
        margin-top: 10px;
      }

      ul {
        padding-left: 21px;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }
    }

    li {
      a {
        display: inline-flex;
        align-items: center;
      }

      a::before {
        content: "";
        -webkit-flex-basis: 4px;
        -ms-flex-preferred-size: 4px;
        flex-basis: 4px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        display: block;
        width: 4px;
        height: 4px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #fff;
        margin-right: 16px;
      }
    }
  }
`;
