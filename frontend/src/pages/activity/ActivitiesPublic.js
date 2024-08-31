import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import ImageSlider from '../../components/ImageSlider';
import NewsList from '../../components/NewsList';

export default function ActivitiesPublic() {
  const activities = [
    {
      id: 1,
      name: "Graduation celebration",
      time: "July 15, 2023",
      content: "More info",
    },
    {
      id: 2,
      name: "AI Integration in Healthcare",
      time: "July 20, 2023",
      content: "Artificial intelligence is increasingly being used in healthcare to improve diagnostics, streamline operations, and enhance patient care through predictive analytics.",
    },
    {
      id: 3,
      name: "5G Network Expansion",
      time: "July 31, 2023",
      content: "The global rollout of 5G technology is accelerating, promising faster data speeds, lower latency, and enhanced connectivity for IoT devices.",
    },
    {
      id: 4,
      name: "Quantum Computing Advancements",
      time: "August 1, 2023",
      content: "Researchers are making strides in quantum computing, which could revolutionize fields like cryptography, materials science, and drug discovery with its unprecedented processing power.",
    },
    {
      id: 5,
      name: "Meta's AI Chatbots",
      time: "August 6, 2023",
      content: "Meta (formerly Facebook) recently introduced AI-powered chatbots for its platforms, aiming to improve user interactions and customer service.",
    },
    {
      id: 6,
      name: "Green Tech Innovations",
      time: "August 13, 2023",
      content: "The push for sustainability has led to new breakthroughs in green technologies, such as carbon capture and renewable energy solutions aimed at mitigating climate change.",
    },
  ];

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
          header='ACTIVITES'
          title='Activities'
          abstract='Discover our best moment and latest news from the lab'
        />
        <Box my={15} />
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
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <NewsList 
          title='Activities'
          abstract='Discover our latest news from the lab'
          posts={activities}
          type='activity'
          numberOfPosts={activities.length}
        />
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} /> 
      </Container>
    </main>
  );
}
