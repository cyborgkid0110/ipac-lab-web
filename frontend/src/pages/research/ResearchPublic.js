import * as React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import FeaturedPost from '../blog/FeaturedPost';
import PageTitle from '../../components/PageTitle';
import NewsList from '../../components/NewsList';

export default function ResearchPublic() {
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

  const publications = [
    {
      id: 1,
      author: 'K.R. Krishnanand, Bhuneshwar Prasad, Hoang Duc Chinh, A.K. Rathore, S.K. Panda',
      year: 2013,
      title: 'Smart-metering for monitoring building power distribution network using instantaneous phasor computations of electrical signals',
      abstract: `This paper presents a smart-metering framework based on computations of instantaneous phasors of voltage and current signals measured at a given node. The idea and requirement of electrical transparency inside a building is presented initially. Then the implementation of phasor estimation algorithm is discussed for the purpose of smart-metering. The capability of the smart-meter to do detailed power quality analysis is also presented. The ongoing work of hardware implementation and real-time testing of such smart-metering is also mentioned in the paper.`,
      url: 'https://ieeexplore.ieee.org/document/6699469',
    },
    {
      id: 2,
      author: 'Hoang Duc Chinh, Y. K. Tan, H. B. Chng, S. K. Panda',
      year: 2009,
      title: 'Thermal energy harvesting from human warmth for wireless body area network in medical healthcare system',
      abstract: `In the medical healthcare system, wireless body area network (WBAN) is used to monitor the fall event of a patient by sensing his/her body state orientation (stand or fall posture). However, for a conventional WBAN, the only way to communicate with the doctors' computers or hospital's servers is through the local gateway. Hence, the reliability of the WBAN is greatly dependent on the life span of the gateway. In this paper, a selective gateway method based on the residual energy of the sensor nodes has been proposed. By changing the gateway, the lifetime of the WBAN can be extended. To further increase the lifetime of the WBAN, a thermal energy harvesting system has been proposed to harvest heat energy from human warmth. Energy harvested using the thermoelectric generator (TEG) is stored in an energy storage device until sufficient energy is available. Based on the experimental test results obtained, the accumulated energy is around 1.369 mJ to power the loads comprising of sensor, RF transmitter and its associated electronic circuits. The sensed information is transmitted in 5 digital words of 12-bit data across a transmission period of 120 msec. The receiver platform displays the patient identification number and sounds out an alarm buzzer for aid if a fall event is detected.`,
      url: 'https://ieeexplore.ieee.org/document/5385814',
    },
    {
      id: 3,
      author: 'Hoang Duc Chinh, Parikshit Yadav, R. Kumar, S. K. Panda',
      year: 2010,
      title: 'A Robust Harmony Search Algorithm Based Clustering Protocol for Wireless Sensor Networks',
      abstract: 'Optimizing energy consumption is the main concern for designing and planning the operation of the Wireless Sensor Networks (WSNs). Clustering technique is one of the methods utilized to extend lifetime of the network by applying data aggregation and balancing energy consumption among sensor nodes of the network. In this paper, we propose the recently developed, Harmony Search Algorithm (HSA) for minimizing the intra-cluster distance and optimizing the energy consumption of the network. HSA is music based meta-heuristic optimization method which is analogous with the music improvisation process where musician continue to polish the pitches in order to obtain better harmony. A comparison is made with the well known cluster-based protocol approach developed for WSNs known as Low-Energy Adaptive Clustering Hierarchy (LEACH), heuristic optimization algorithms like Particle Swarm Optimization (PSO) and Genetic Algorithm(GA) as well as the traditional K-means and Fuzzy C-Means (FCM) clustering algorithms. Simulation results demonstrate that the proposed protocol using HSA can reduce energy consumption and improve the network lifetime.',
      url: 'https://ieeexplore.ieee.org/document/5503895',
    },
    {
      id: 4,
      author: 'D.C. Hoang, R. Kumar, S.K. Panda',
      year: 2010,
      title: 'Fuzzy C-Means clustering protocol for Wireless Sensor Networks',
      abstract: 'Hierarchical or cluster based routing methods are well-known techniques with special advantages related to scalability and efficient communication. Clustering technique is also utilized as an energy-efficient routing in Wireless Sensor Networks where the nodes with the highest residual energy can be used to gather data and send the information. In this paper, we proposed and analyzed a cluster based protocol using Fuzzy C-Means (FCM) method. A comparison among FCM, K-Means clustering, LEACH and MTE has been done. Simulation result shows that FCM protocol can reduce energy consumption and improve the network lifetime.',
      url: 'https://ieeexplore.ieee.org/document/5637779',
    },
    {
      id: 5,
      author: 'Duc Chinh Hoang, Ching Kuan Thye, Rajesh Kumar, Sanjib Kumar Panda',
      year: 2012,
      title: 'Intra-cluster power management in hierarchical routing protocols for wireless sensor networks',
      abstract: `The hierarchical routing protocol for wireless sensor networks is recognized as a technique that can reduce energy consumption of the networks and thereby increase their efficiency. Cluster head selection and network power management play important roles to improve the performance of this protocol. In this paper, a routing protocol for a small-scale wireless sensor network has been physically developed and implemented. Cluster head rotation is used to balance the energy consumption and time scheduling of the sensor node operation is carried out to achieve energy saving. The proposed work focuses on managing the energy usage within the cluster but can be extended for a large wireless sensor network facilitated by different clustering algorithms. An experimental study has been performed to compare the impact of different cluster head selection algorithms on the network's lifetime. The test results show that the network lifetime is prolonged when a voltage-based selection scheme is used for energy conservation as compared to the other algorithms.`,
      url: 'https://ieeexplore.ieee.org/document/6237250',
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
          header='RESEARCH' 
          title='Publications'
          abstract='Explore a selection of our recent research on some of the most complex and interesting challenges'
        />
        <Box my={15} />
        <Grid container display='flex'>
          <Grid item xs={6}>
            <Typography variant='h4'>
              Research areas
            </Typography>
            <Typography variant='h6' style={{ color: 'gray' }}>
              Discover our research fields of the lab
            </Typography>
          </Grid>
          <Grid item xs={6} justifyContent='right' alignContent='center' display='grid'>
            <Button>
              <Typography variant='h5' color='primary'>
                View all research areas
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box my={4} />
        <Grid container spacing={10}>
          {researchTopics.map((post, index) => (
            <Grid item xs={12} md={4}>
              <FeaturedPost key={index} post={post} />
            </Grid>
          ))}
        </Grid>
        <Box my={10} />
        <NewsList 
          title='Publications'
          abstract='Explore a selection of our recent research on some of the most complex and interesting challenges'
          type='publication'
          posts={publications}
          numberOfPosts={publications.length}
        />
        <Box my={10} />  
      </Container>
    </main>
  );
}
