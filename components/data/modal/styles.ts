import styled from "styled-components"
import { darken } from "polished";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        max-width: 400px;
        width: 100%;
        padding: 25px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        z-index: 3;

        .close {
            height: 20px;
            width: auto;
            fill: #dc9300;
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
            transition: 0.3s;
        }

        .close:hover {
            fill: ${darken(0.1, "#dc9300")};
        }
    }

    .bg {
        background-color: rgba(0,0,0,0.4);
        min-height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
`