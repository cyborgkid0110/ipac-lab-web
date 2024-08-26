import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as LinkURL } from 'react-router-dom';
import Profile from './Profile';
import { AppBar, Slide, useScrollTrigger } from '@mui/material';
import { useTheme } from '@emotion/react';

function Header(props) {
  const theme = useTheme();
  const { sections, title } = props;

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      threshold: 100, // Ẩn sau khi cuộn 100px
    });

    return (
      <Slide appear={false} direction="down" in={!trigger} easing={{ enter: theme.transitions.easing.easeInOut, exit: theme.transitions.easing.easeInOut, }}>
        <AppBar 
          position='sticky'
          color="default" 
          sx={{ 
            backgroundColor: 'rgba(255,255,255,0.7)',
            boxShadow:  '0px 0px',
            backdropFilter: 'blur(10px)', // Add blur effect
            WebkitBackdropFilter: 'blur(10px)', // Safari support
          }}
        >
          {children}
        </AppBar>
      </Slide>
    );
  }

  return (
    <React.Fragment>
      <HideOnScroll>
        <Toolbar sx={{
          backgroundColor: 'transparent',
        }}>
          <Button size="small">
            <Typography variant="h6">Icon</Typography>
          </Button>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <Profile />
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
          {sections.map((section) => (
            <LinkURL key={section.title} to={section.url}>
              <Link color="inherit" noWrap sx={{ p: 1, flexShrink: 0 }}>
                <Button variant="large">
                  <Typography variant="h5" color="black">
                    {section.title}
                  </Typography>
                </Button>
              </Link>
            </LinkURL>
          ))}
        </Toolbar>
      </HideOnScroll>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
