import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Divider, Grid, IconButton, Stack } from '@mui/material';

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
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}  justifyContent='center' display='flex'>
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
          <Grid item mt={2} mb={3} xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} textAlign='left'>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
             <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems='flex-start'
              spacing={2}
             >
              <Typography fontSize='18px' variant='h6'>Learn more</Typography>
              <Typography variant='h6' style={{ color: 'gray'}}>Publications</Typography>
              <Typography variant='h6' style={{ color: 'gray'}}>Activities</Typography>
              <Typography variant='h6' style={{ color: 'gray'}}>Technologies</Typography>
             </Stack>
             <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems='flex-start'
              spacing={2}
             >
              <Typography fontSize='18px' variant='h6'>About</Typography>
              <Typography variant='h6' style={{ color: 'gray'}}>About IPAC Lab</Typography>
              <Typography variant='h6' style={{ color: 'gray'}}>Members</Typography>
             </Stack>
             <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems='flex-start'
              spacing={1}
             >
              <Typography fontSize='18px' variant='h6'>Contact us</Typography>
              <Typography variant='h6' fontSize='16px'>Dr. Hoang Duc Chinh</Typography>
              <Typography variant='h6' fontSize='16px'>Tel: 0987654321</Typography>
              <Typography variant='h6' fontSize='16px'>Gmail: hdc@hust.edu.vn</Typography>
             </Stack>
            </Stack>
          </Grid>
          <Grid item my={3} xs={12}>
            <Divider />
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
