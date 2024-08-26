import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Banner from './Banner';
import { Box, Button, Container, Typography } from '@mui/material';
import TechnologyPost from './TechnologyPost';
import { useNavigate } from 'react-router-dom';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://picsum.photos/1100/350',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/1600/900',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/1600/900',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/1600/900',
    imageLabel: 'Image Text',
  },
];

const technology = {
  title: 'Technology post',
  description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://picsum.photos/1600/900',
}

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const post = {
    title: 'Welcome to IPAC Lab!',
    description:
      "IoT, Power, Actuation and Control Research Group",
    image: 'https://picsum.photos/1920/1080',
  };

  const navigate = useNavigate();

  return (
    <main>
      {/*    */}
      <Banner post={post}/>
      <Box my={4} />
      <Container 
        maxWidth='false'
        sx={{ maxWidth: '1296px'}}
        // style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Grid container display='flex'>
          <Grid item xs={6}>
            <Typography variant='h4'>
              Latest News
            </Typography>
            <Typography variant='h6'>
              Discover our latest AI breakthroughs and updates from the lab
            </Typography>
          </Grid>
          <Grid item xs={6} justifyContent='right' alignContent='center' display='grid'>
            <Button onClick={() => navigate('/activities')}>
              <Typography variant='h5' color='primary'>
                View all posts
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box my={4} />
        <Grid container spacing={10}>
          {featuredPosts.map((post) => (
            <Grid item xs={12} md={4}>
              <FeaturedPost key={post.title} post={post} />
            </Grid>
          ))}
        </Grid>
        <Box my={10} />
        <Typography variant='h3' textAlign='center'>Technologies</Typography>
        <Typography variant='h4' fontWeight='normal' py={1} fontSize='30px' textAlign='center'>Breakthrough research. Transformative products.</Typography>
        <Grid container justifyContent='center'>
          <Button>
            <Typography variant='h5' color='primary' onClick={() => navigate('/technology')}>
              View all technologies
            </Typography>
          </Button>
        </Grid>
        <Box my={10} />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TechnologyPost key={technology.title} post={technology} />
          </Grid>
        </Grid>
        <Box my={10} />

        <Grid container spacing={5}>
          <Grid item xs={8}>
          </Grid>
          {/* <Main title="From the firehose" post={post1} />
          <Main title="From the firehose" post={post2} />
          <Main title="From the firehose" post={post3} /> */}
          {/* <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          /> */}
        </Grid>
      </Container>
    </main>
  );
}
