// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, strong {
    color: ${theme.colors.onSurface};
  }

  p {
    line-height: 1.6;
    color: ${theme.colors.text};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  input,
  select,
  textarea {
    background-color: ${theme.colors.soft};
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.text};
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius};
    font-size: 1rem;
    width: 100%;
    resize: none;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }
`;
