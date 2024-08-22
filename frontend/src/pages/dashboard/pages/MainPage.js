import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export default function MainPage({ element, titlePage, pagePath }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu titlePage={titlePage} />
      <Navbar titlePage={titlePage} />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          position: { sm: 'relative', md: '' },
          top: { sm: '48px', md: '0' },
          height: { sm: 'calc(100vh - 48px)', md: '100vh' },
          flexGrow: 1,
          pt: 2,
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 10,
          }}
        >
          <Header pagePath={pagePath} />
          {element}
        </Stack>
      </Box>
    </Box>
  );
}
