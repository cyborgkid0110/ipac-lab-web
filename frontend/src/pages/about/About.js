import * as React from 'react';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import FeaturedPost from '../blog/FeaturedPost';
import ImageSlider from '../../components/ImageSlider';

export default function About() {
  const researchTopics = [
    {
      title: 'Smart Building and Smart Grid',
      image: 'https://picsum.photos/1600/900',
      description: 'Smart buildings and grids use advanced technologies to optimize energy efficiency, sustainability, and connectivity in urban infrastructure.',
    },
    {
      title: 'Data Analysis and Optimization',
      image: 'https://picsum.photos/1616/909',
      description: 'Data analysis and optimization involve extracting insights from data and improving decision-making processes to enhance efficiency and performance.',
    },
    {
      title: 'Environmental Friendly Agriculture',
      image: 'https://picsum.photos/1632/918',
      description: 'Environmentally friendly agriculture focuses on sustainable farming practices that minimize environmental impact and promote long-term ecological balance.'
    }
  ]

  return (
    <main>
      {/*    */}
      <Container 
        maxWidth='false'
        sx={{ maxWidth: '1296px'}}
        style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Box my={10} />
        <Typography textAlign='center' variant='h6' fontSize='12px' style={{ color: 'gray' }}>OUR MISSION</Typography>
        <Typography textAlign='center' variant='h2' fontWeight='normal'>
          Fill main mission or slogan of the team
        </Typography>
        <Box my={10} />
        <Container 
          maxWidth='false'
          sx={{ maxWidth: '616px'}}
          style={{ paddingLeft: 0, paddingRight: 0}}
        >
          <Typography variant='h6' fontSize='36px' my={2}>Out vision</Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            Fill what is goal and desired achievement here?
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            We live in an exciting time when AI research and technology are delivering extraordinary advances.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            We're a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.
          </Typography>
          <Typography variant='h6' fontSize='16px' my={2} style={{ color: 'gray'}}>
            By solving some of the hardest scientific and engineering challenges of our time, we're working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people.
          </Typography>
          <Typography variant='h6' fontSize='13px' my={2} style={{ color: 'gray'}} textAlign='right'>
            Dr. Hoang Duc Chinh - Supervisor of IPAC Lab
          </Typography>
        </Container>
        <Box my={10} />
        <Stack
          sx={{
            flexDirection: {xs: 'column', md: 'row'},
            alignItems: {xs: 'center', md: 'flex-start'},
            gap: {xs: 5, md: 15, lg: 20}
          }}
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Button>
              <Typography variant='h5'>Publications</Typography>
            </Button>
            <Typography variant='h2'>100</Typography>
          </Stack>
          <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Button>
              <Typography variant='h5'>Members</Typography>
            </Button>
            <Typography variant='h2'>30+</Typography>
          </Stack>
          <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Button size='inherit ' fullWidth>
              <Typography variant='h5'>Research Areas</Typography>
            </Button>
            <Typography variant='h2'>10</Typography>
          </Stack>
        </Stack>
        <Box my={10} />
        <Typography variant='h3' textAlign='center'>Research Areas</Typography>
        <Box my={4} />
        <Grid container spacing={10}>
          {researchTopics.map((post, index) => (
            <Grid item xs={12} md={4}>
              <FeaturedPost key={index} post={post} />
            </Grid>
          ))}
        </Grid>
        <Box my={10} />
        <Typography variant='h3' textAlign='center'>Spotlight</Typography>
        <Box my={4} />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ImageSlider size='medium' />
            <Typography variant='h6' textAlign='center' my={4}>Description event 1</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageSlider size='medium' />
            <Typography variant='h6' textAlign='center' my={4}>Description event 2</Typography>
          </Grid>
        </Grid>
        <Box my={10} />
      </Container>
    </main>
  );
}
