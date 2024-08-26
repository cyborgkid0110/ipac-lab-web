import * as React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import MemberCard from './MemberCard';

export default function MembersPublic() {
  const [memberData, setMemberData] = React.useState({alumni: [], supervisor: [], smartFarm: [], smartBiogas: [], agv: []})

  const members = [
    {
      id: 1,
      name: 'Tran Quang Anh',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/300/400',
    },
    {
      id: 2,
      name: 'Pham Huy Tuyen',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/303/404',
    },
    {
      id: 3,
      name: 'Phan Duc Manh',
      course: 65,
      position: 'Alumni',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/306/408',
    },
    {
      id: 4,
      name: 'Tran Son',
      course: 65,
      position: 'Member',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/309/412',
    },
    {
      id: 5,
      name: 'Do Tien Hai',
      course: 64,
      position: 'Alumni',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/312/416',
    },
    {
      id: 6,
      name: 'Do Tien Dung',
      course: 65,
      position: 'Alumni',
      research_topic: 'Smart biogas',
      image: 'https://picsum.photos/300/400',
    },
    {
      id: 7,
      name: 'Dr. Hoang Duc Chinh',
      course: 48,
      position: 'Supervisor',
      research_topic: 'Department of Automation',
      image: 'https://picsum.photos/303/404',
    },
    {
      id: 8,
      name: 'Tran Phuong Du',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
      image: 'https://picsum.photos/306/408',
    },
    {
      id: 9,
      name: 'Nguyen Duc Minh',
      course: 67,
      position: 'Member',
      research_topic: 'AGV',
      image: 'https://picsum.photos/309/412',
    }
  ]

  const sortedMemberData = (members) => {
    let result = {
      alumni: [],
      supervisor: [],
      smartFarm: [],
      smartBiogas: [],
      agv: []
    };

    members.forEach(member => {
      // Check position for Alumni
      if (member.position.toLowerCase() === 'alumni') {
          result.alumni.push(member);
      }
      // Check position for Supervisor
      if (member.position.toLowerCase() === 'supervisor') {
          result.supervisor.push(member);
      }
      // Check research_topic for Smart Farm
      if (member.research_topic.toLowerCase() === 'smart farm') {
          result.smartFarm.push(member);
      }
      // Check research_topic for Smart Biogas
      if (member.research_topic.toLowerCase() === 'smart biogas') {
          result.smartBiogas.push(member);
      }
      // Check research_topic for AGV
      if (member.research_topic.toLowerCase() === 'agv') {
          result.agv.push(member);
      }
    });
    
    return result;
  }

  React.useEffect(() => {
    setMemberData(sortedMemberData(members));
  }, [])

  return (
    <main>
      {/*    */}
      <Container 
        maxWidth='xl'
        style={{ paddingLeft: 24, paddingRight: 24}}
      >
        <Box my={15} />
        <PageTitle 
          header='ABOUT' 
          title='Members'
          abstract='Meet the IPAC Lab team with dedicated researchers united by their passion for learning and discovery.'
        />
        <Box my={10} />
        <Typography variant='h4' textAlign='center' my={4}>Supervisor</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.supervisor.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box my={10} />
        <Typography variant='h4' textAlign='center' my={4}>Smart Farm</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.smartFarm.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box my={10} />
        <Typography variant='h4' textAlign='center' my={4}>Smart Biogas</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.smartBiogas.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box my={10} />
        <Typography variant='h4' textAlign='center' my={4}>AGV Group</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.agv.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box my={10} />
      </Container>
    </main>
  );
}
