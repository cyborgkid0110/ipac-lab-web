import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function TechnologyBanner(props) {
  const { post } = props;

  // const post = {
  //   title: 'Welcome to IPAC Lab!',
  //   description:
  //     "IoT, Power, Actuation and Control Research Group",
  //   image: 'https://picsum.photos/1920/1080',
  // };

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        height: {xs: 300, md: 450, xl: 600},
        borderRadius: 2
      }}
      style={{
        '--post-image': post.image,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt='pic' />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container height='100%'>
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
            height='100%'
            textAlign='center'
            alignContent='center'
          >
            <Typography component="h1" variant="h1" color="inherit" gutterBottom
              sx={{
                fontSize: {xs: 30, md: 45, xl: 60}
              }}
            >
              {post.title}
            </Typography>
            <Typography variant="h4" color="inherit" sx={{ 
              marginBottom: 2,
              fontSize: {xs: 24, md: 30, xl: 36}
            }}
            >
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

TechnologyBanner.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TechnologyBanner;
