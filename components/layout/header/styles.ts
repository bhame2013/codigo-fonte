import styled from "styled-components";

export const Header = styled.header`
  .top {
    background: #000;
    padding: 15px;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 70%;
      margin: 0 auto;
    }

    .logo {
      max-width: 80px;

      img {
        width: 100%;
      }
    }

    .user {
      display: flex;
      align-items: center;
      gap: 10px;

      .user-image {
        position: relative;

        .ball {
          width: 30px;
          height: 30px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 100%;

          background: linear-gradient(
            90deg,
            rgba(255, 0, 66, 1) 0%,
            rgba(9, 9, 121, 1) 100%
          );
        }

        /* img {
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
          display: none;
        } */

        .settings {
          position: absolute;
          right: 0;
          top: 35px;
          border: 1px solid #333;
          border-radius: 8px;
          width: 200px;
          z-index: 10;
          background-color: #000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .new-code {
            color: #fff;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            background-color: #238636;
            margin: 0;
            border: 0;
            height: 34px;

            svg {
              height: 13px;
              fill: #fff;
            }
          }

          .new-code:hover {
            background-color: #2ea043;
          }

          .signOut {
            border: 0;
            height: 38px;
            background-color: transparent;
            color: #fff;
            padding-left: 20px;
            padding-bottom: 3px;
            border-top: 1px solid rgba(255,255,255,0.2);
          }

          .signOut:hover {
            background-color: rgba(255,255,255,0.02);
          }
        }
      }

      .text {
        color: #fff;
      }
    }
  }
`;
