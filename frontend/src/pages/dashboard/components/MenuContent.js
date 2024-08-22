import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PublicIcon from '@mui/icons-material/Public';
import CategoryIcon from '@mui/icons-material/Category';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { useNavigate } from 'react-router-dom';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon /> },
  { text: 'Publications', icon: <PublicIcon /> },
  { text: 'Technologies', icon: <CategoryIcon /> },
  { text: 'Activities', icon: <LocalActivityIcon /> },
  { text: 'Members', icon: <PeopleRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', icon: <InfoRoundedIcon /> },
  { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent({ titlePage }) {
  const nagivate = useNavigate();

  const handleNavigation = (text) => {
    if (text === 'Home') nagivate('/developer/home');
    else if (text === 'Publications') nagivate('/developer/publication');
    else if (text === 'Technologies') nagivate('/developer/technology');
    else if (text === 'Activities') nagivate('/developer/activity');
    else if (text === 'Members') nagivate('/developer/member');
  }

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => handleNavigation(item.text)} selected={item.text === titlePage}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </Stack>
  );
}
