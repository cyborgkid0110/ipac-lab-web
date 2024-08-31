import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Collapse, Divider, Grid, IconButton, List, ListItem, ListItemButton, Stack, styled } from '@mui/material';
import NavButton from './NavButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Copyright() {
  return (
    <Typography
      variant="body2"
      textAlign='center'
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        IPAC Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const ExpandMore = styled((props) => {
    const { expand, sx, ...other } = props;
    return <ExpandMoreIcon {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    transform: ({ expand }) => (expand ? 'rotate(180deg)' : 'rotate(0deg)'),
    [theme.breakpoints.down('sm')]: {
      color: 'black',
    },
    [theme.breakpoints.up('md')]: {
      color: 'transparent',
    },
    // variants: [
    //   {
    //     props: ({ expand }) => !expand,
    //     style: {
    //       transform: 'rotate(0deg)',
    //     },
    //   },
    //   {
    //     props: ({ expand }) => !!expand,
    //     style: {
    //       transform: 'rotate(180deg)',
    //     },
    //   },
    // ],
  }));
  

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, px: 6 }}  justifyContent='center' display='flex'>
      <Box sx={{ width: '100%', maxWidth: '1296px'}}>
        <Grid container>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h6" align="left" >
                Follow
              </Typography>
              <IconButton size='large' sx={{ color: 'black'}}>
                <FacebookIcon fontSize='inherit' />
              </IconButton>
              <IconButton size='large' sx={{ color: 'black'}}>
                <XIcon fontSize='inherit' />
              </IconButton>
              <IconButton size='large' sx={{ color: 'black'}}>
                <GitHubIcon fontSize='inherit' />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item mt={1} mb={1} xs={12}>
            <Divider sx={{borderColor: 'hsl(220deg 12.44% 80.22% / 80%)'}} />
          </Grid>
          <Grid item container xs={12} textAlign='left' justifyContent='center'>
            <Grid item xs={12} md={3.5}>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemButton disableGutters onClick={handleExpandClick} aria-expanded={expanded} 
                    sx={{
                      ':hover': {
                        color: 'black',
                        backgroundColor: 'transparent'
                      },
                    }}
                  >
                    <Typography fontSize='18px' variant='h6'>Learn more</Typography>
                    <ExpandMore
                      expand={expanded}
                      aria-label="show more"
                    />
                  </ListItemButton>
                </ListItem>
                <Collapse in={isMdUp ? true : expanded} timeout='auto' unmountOnExit>
                  <ListItem disableGutters>
                    <NavButton title='Publications' path='/research' />
                  </ListItem>
                  <ListItem disableGutters> 
                    <NavButton title='Activities' path='/activities' />
                  </ListItem>
                  <ListItem disableGutters>
                    <NavButton title='Technologies' path='/technology' />
                  </ListItem>
                </Collapse>
              </List>
              <Divider sx={{
                borderColor: {xs: 'hsl(220deg 12.44% 80.22% / 80%)', md: 'transparent'}
              }}/>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemButton disableGutters onClick={handleExpandClick2} aria-expanded={expanded2}
                    sx={{
                      ':hover': {
                        color: 'black',
                        backgroundColor: 'transparent'
                      },
                    }}
                  >
                    <Typography fontSize='18px' variant='h6'>About</Typography>
                    <ExpandMore
                      expand={expanded2}
                      aria-label="show more"
                    />
                  </ListItemButton>
                </ListItem>
                <Collapse in={isMdUp ? true : expanded2} timeout='auto' unmountOnExit>
                  <ListItem disableGutters>
                    <NavButton title='About IPAC Lab' path='/home' />
                  </ListItem>
                  <ListItem disableGutters>
                    <NavButton title='Members' path='/members' />
                  </ListItem>
                </Collapse>
              </List>
              <Divider sx={{
                borderColor: {xs: 'hsl(220deg 12.44% 80.22% / 80%)', md: 'transparent'}
              }}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography fontSize='18px' pt={2} pb={1} variant='h6'>Contact us</Typography>
              <Typography variant='h6' py={1} fontSize='16px'>Dr. Hoang Duc Chinh</Typography>
              <Typography variant='h6' py={1} fontSize='16px'>Tel: 0987654321</Typography>
              <Typography variant='h6' py={1} fontSize='16px'>Gmail: chinh.hoangduc@hust.edu.vn</Typography>
            </Grid>
          </Grid>
          <Grid item my={3} xs={12}>
            <Divider sx={{borderColor: 'hsl(220deg 12.44% 80.22% / 80%)'}} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              align="center"
              component="p"
              sx={{
                color: 'text.secondary',
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
