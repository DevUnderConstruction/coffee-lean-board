import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  : root {
    --primary-color: #1A1A1A;
    --secondary-color: #bab9b9;
    --third-color:#b5e853;
    --fourth-color: #FFFFFF;
    --fifth-color:  #ff6600;

  }
  body {
    font-family: Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace;
    margin: 0;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;
