import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1;

    /* For theme switching */
    transition: background-color 0.3s, border 0.3s;
  }
  
`;

export default GlobalStyles;
