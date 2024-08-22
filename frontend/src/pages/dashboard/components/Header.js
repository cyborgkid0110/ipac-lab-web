import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';

function getCurrentDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  return dateString;
}

function Header({ pagePath }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs pagePath={pagePath} />
      <Stack direction="row" sx={{ gap: 1 }}>
        <CustomDatePicker
          value={dayjs(getCurrentDateString())}
          open={false}
          buttonSize='small'
        />  
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
      </Stack>
    </Stack>
  );
}

export default Header;
