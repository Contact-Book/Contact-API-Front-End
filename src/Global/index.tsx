import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: "Roboto", sans-serif;
    }
    body {
        background-color: #020202;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

`;
