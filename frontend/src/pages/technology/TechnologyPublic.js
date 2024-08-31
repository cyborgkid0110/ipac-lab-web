import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import TechnologyPost from '../blog/TechnologyPost';
import TechnologyBanner from './TechnologyBanner';
import PageTitle from '../../components/PageTitle';

export default function TechnologyPublic() {
  const technology = {
    title: 'Featured post',
    date: 'Nov 12, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/1600/900',
    imageLabel: 'Image Text',
  }

  const latestTech = {
    title: 'Smart Farm',
    description:
      "An environmental monitoring system for smart building",
    image: 'https://picsum.photos/1920/1080',
  };

  return (
    <main>
      {/*    */}
      <Container 
        maxWidth='false'
        sx={{ maxWidth: '1296px'}}
        style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Box my={15} />
        <PageTitle 
          header='TECHNOLOGIES' 
          title='Fill purpose or aim of technologies'
          abstract='Fill brief abstract of technologies'
        />
        <Box my={15} />
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <TechnologyBanner post={latestTech} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
        </Grid>
        <Box pt={5} />
        <Grid container justifyContent='center'>
          <Button variant='contained' sx={{
            fontSize: '18px',
            padding: 3,
            borderRadius: 3,
            backgroundColor: '#1a73e8',
            backgroundImage: 'none',
            ':hover': {
              backgroundColor: '#2975CA',
            },
          }}
          >
            Load more
          </Button>
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
      </Container>
    </main>
  );
}
