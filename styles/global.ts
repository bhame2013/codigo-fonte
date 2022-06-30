import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --yellow: #dc9300;
    --container: 1380px;
}

html {
    scroll-behavior: smooth !important;
}

body {
    overflow-x: hidden !important;
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
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
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
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}




`;
