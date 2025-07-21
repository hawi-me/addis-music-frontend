import { css } from '@emotion/react';

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export const globalStyles = css`
  body {
    font-family: Arial, sans-serif;
    background-color: ${theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;