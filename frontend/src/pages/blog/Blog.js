import * as React from 'react';
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import Banner from './Banner';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import TechnologyPost from './TechnologyPost';
import { useNavigate } from 'react-router-dom';
import PostTitle from '../../components/PostTitle';
import ImageSlider from '../../components/ImageSlider';
import { navigateTo } from '../../components/navigateTo';
import RegistrationButton from '../members/RegistrationButton';

export default function Blog() {
  const navigate = useNavigate();
  const post = {
    title: 'Welcome to IPAC Lab!',
    description:
      "IoT, Power, Actuation and Control Research Group",
    image: 'https://picsum.photos/1920/1080',
  };

  const technology = [
    {
      title: 'Technology post 1',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://picsum.photos/1600/900',
    },
    {
      title: 'Technology post 2',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://picsum.photos/1920/1080',
    }
  ]

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
  ];

  return (
    <main>
      {/*  Banner  */}
      <Banner post={post}/>
      <Box sx={{
        paddingTop: {xs: '64px', md: '80px'}
      }} />
        <Typography textAlign='center' variant='h6' fontSize='12px' style={{ color: 'gray' }}>OUR MISSION</Typography>
        <Typography px={1} textAlign='center' variant='h2' fontWeight='normal'
          sx={{
            fontSize: {xs: 40, md: 48}
          }}
        >
          Fill main mission or slogan of the team
        </Typography>
        <Box sx={{
          paddingTop: {xs: '64px', md: '80px'}
        }} />
        <Container 
          maxWidth='false'
          sx={{ maxWidth: '616px'}}
          style={{ paddingLeft: 24, paddingRight: 24}}
        >
          <Typography variant='h6' fontSize='36px' my={2}>Our vision</Typography>
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
        <Box sx={{
          paddingTop: {xs: '64px', md: '80px'}
        }} />
        <Container 
          maxWidth='false'
          sx={{ maxWidth: '1296px'}}
          style={{ paddingLeft: 24, paddingRight: 24}}
        >
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
              <Button onClick={() => navigateTo(navigate, '/research')}>
                <Typography variant='h5'>Publications</Typography>
              </Button>
              <Typography variant='h2'>100</Typography>
            </Stack>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button onClick={() => navigateTo(navigate, '/members')}>
                <Typography variant='h5'>Members</Typography>
              </Button>
              <Typography variant='h2'>30+</Typography>
            </Stack>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button onClick={() => navigateTo(navigate, '/research')}>
                <Typography variant='h5'>Research Areas</Typography>
              </Button>
              <Typography variant='h2'>10</Typography>
            </Stack>
          </Stack>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <Container 
            maxWidth='false'
            sx={{ maxWidth: '900px'}}
            style={{ paddingLeft: 0, paddingRight: 0}}
          >
            <RegistrationButton onClick={() => navigateTo(navigate, '/members/registration')} />
          </Container>
          {/* Research area */}
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <PostTitle
            title='Research areas'
            abstract='Discover our research fields of the lab'
            navText='View all research areas'
            navigatePath='/research'
          />
          <Box my={4} />
          <Grid container spacing={10}>
            {researchTopics.map((post, index) => (
              <Grid item xs={12} md={4}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <Typography variant='h3' textAlign='center'>Technologies</Typography>
          <Typography variant='h4' fontWeight='normal' py={1} fontSize='30px' textAlign='center'>Breakthrough research. Transformative products.</Typography>
          <Grid container justifyContent='center'>
            <Button>
              <Typography variant='h5' color='primary' onClick={() => navigateTo(navigate, '/technology')}>
                View all technologies
              </Typography>
            </Button>
          </Grid>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <TechnologyPost key={technology.title} post={technology[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TechnologyPost key={technology.title} post={technology[1]} />
            </Grid>
          </Grid>
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
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
          <Box sx={{
            paddingTop: {xs: '64px', md: '80px'}
          }} />
        </Container>
    </main>
  );
}
