import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    &, &.light-mode {
      --color-text-primary: #212529;
      --color-text-secondary: #495057;
      --color-text-tertiary: #868e96;

      --color-bg-white: #fff;
    }
  }

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
    color: var(--color-text-primary);

    /* For theme switching */
    transition: background-color 0.3s, border 0.3s;
  }
  
  a.active:not(:has(img)) {
    border-bottom: 2px solid currentColor;
  }
`;

export default GlobalStyles;
