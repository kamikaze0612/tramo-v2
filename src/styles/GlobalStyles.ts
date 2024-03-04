import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    &, &.light-mode {
      --color-text-primary: #212529;
      --color-text-secondary: #495057;
      --color-text-tertiary: #868e96;
      --color-text-white: #f8f9fa;

      --color-bg-white: #fff;
      --color-bg-black: #212529;
      --color-bg-red: #fa5252;
    }

    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
    --shadow-sm-invert: 0 -2px 4px rgba(0, 0, 0, 0.05);
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

  .leaflet-popup-content-wrapper {
    max-width: 250px;
    min-width: 150px;
    overflow: hidden;
    border-left: 4px solid #212529;
  }

  .leaflet-popup-content {
    font-size: 1.6rem;
    color: #212529;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  span.tab--active {
    background-color: var(--color-bg-black);
    color: var(--color-text-white);
  }
`;

export default GlobalStyles;
