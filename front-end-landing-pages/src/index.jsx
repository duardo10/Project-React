import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: purple;

    ${({ theme }) => css`
      color: ${theme.colors.white}
    `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);