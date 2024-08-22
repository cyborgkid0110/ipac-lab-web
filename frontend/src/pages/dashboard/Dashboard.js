import * as React from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDashboardTheme from './theme/getDashboardTheme';
import MainPage from './pages/MainPage';

export default function Dashboard({ element, titlePage, pagePath }) {
  const dashboardTheme = createTheme(getDashboardTheme('light'));

  return (
    <ThemeProvider theme={dashboardTheme}>
      <CssBaseline />
      <MainPage element={element} titlePage={titlePage} pagePath={pagePath}/>
    </ThemeProvider>
  );
}
