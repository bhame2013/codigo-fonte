import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #ff0042;
    --secondary-color: #0000ef;
    --text-primary-color-dark: #232323;
    --text-primary-color-intermediary: #eeeeee;
    --text-primary-color-light: #fff; 
}

html {
    scroll-behavior: smooth !important;
}

body {
    overflow-x: hidden !important;
    background-color: #111;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--yellow);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--theme-color-light);
}

*:focus {
    outline: transparent !important;
}

.error-message {
    font-size: 12px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
    padding: 0 10px;
}

.uppercase {
    text-transform: uppercase;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;
}

a:hover,
button:hover {
    transition: 0.25s;
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    margin-bottom: 0 !important;
}




`;
