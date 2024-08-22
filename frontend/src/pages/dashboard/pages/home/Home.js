import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedTreeView from '../../components/CustomizedTreeView';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import StatCard from '../../components/StatCard';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Publication',
    recent: 6,        // last 6 month
    total: 200,
  },
  {
    title: 'Activities',
    recent: 3,        // last month
    total: 50,
  },
  {
    title: 'Member',
    recent: 5,        // last 6 month
    total: 100,
  },
];

/***
 * overview data: publication, activities, members
 * {
 *  title: ,
 *  last_30_days: ,
 *  total:
 * }
 */

const columnsPublication = [
  { field: 'title', headerName: 'Article Title', flex: 3, minWidth: 200 },
  {
    field: 'author',
    headerName: 'Author',
    headerAlign: 'right',
    align: 'right',
    flex: 3,
    minWidth: 80,
  },
  {
    field: 'year',
    headerName: 'Year',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
];

const rowsPublication = [
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

const columnsActivity = [
  { field: 'name', headerName: 'Activity', flex: 1, minWidth: 150 },
  {
    field: 'time',
    headerName: 'Time',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'content',
    headerName: 'Content',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
];

const rowsActivity = [
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

export default function Home() {
  const navigate = useNavigate();

  const handleRowClickPublication = (params) => {
    navigate('/developer/publication/modify', { state: { data: params.row } });
  };

  const handleRowClickActivity = (params) => {
    navigate('/developer/activity/modify', { state: { data: params.row } });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid item key={index} xs={12} md={4}>
            <StatCard {...card} />  
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} display='flex'
        sx={{
          flexDirection: {xs: 'column-reverse', md: 'row'}
        }}
      >
        <Grid item xs={12} md={9}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Publication
          </Typography>
          <CustomizedDataGrid 
            rows={rowsPublication} 
            columns={columnsPublication} 
            pageSize={5}
            checkboxSelection={false}
            handleRowClick={handleRowClickPublication}
          />
          <Typography component="h2" variant="h6" sx={{ mb: 2, mt: 2 }}>
            Activities
          </Typography>
          <CustomizedDataGrid 
            rows={rowsActivity} 
            columns={columnsActivity} 
            pageSize={5}
            checkboxSelection={false}
            handleRowClick={handleRowClickActivity}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomizedTreeView />
        </Grid>
      </Grid>
    </Box>
  );
}
