import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles.styled';
import { Header } from 'layout/Header/Header';

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{<Outlet />}</main>
      <GlobalStyles />
    </ThemeProvider>
  );
};
