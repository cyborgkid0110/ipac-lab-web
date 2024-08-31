import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function RegistrationButton({ onClick }) {
  return (
    <Grid container display='flex'>
      <Grid item xs={12} md={7}
        sx={{
          justifyContent: {xs: 'center', md: 'left'}
        }}
      >
        <Typography variant='h4' sx={{
          textAlign: {xs: 'center', md: 'left'},
          paddingBottom: {xs: '16px', md: '0px'}
        }}>
        Discover your potential and join our research teams
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} alignContent='center' display='grid'
        sx={{
          justifyContent: {xs: 'center', md: 'right'}
        }}
      >
        {/* <Button variant='outlined' onClick={() => navigateTo(navigate, '/registration')}>
          <Typography variant='h5' color='primary'>
            Member registration
          </Typography>
        </Button> */}
        <Button
          variant="contained"
          size='large'
          onClick={onClick}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            backgroundImage: 'none',
            color: 'black',
            padding: '8px 16px',
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: '24px',
            border: '1px solid #ccc',
            ':hover': {
              backgroundColor: 'white',
              boxShadow: '0px 1px 1px #888888',
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          <AppRegistrationIcon sx={{ marginRight: '8px' }} />
          Member registration
        </Button>
      </Grid>
    </Grid>
  );
}
