import * as React from 'react';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import MemberCard from './MemberCard';
import { navigateTo } from '../../components/navigateTo';
import { useNavigate } from 'react-router-dom';
import RegistrationButton from './RegistrationButton';

export default function MembersPublic() {
  const navigate = useNavigate();
  const [memberData, setMemberData] = React.useState({alumni: [], supervisor: [], member: []})
  const [alumni, setAlumni] = React.useState(0);
  const [supervisor, setSupervisor] = React.useState(0);
  const [activeMember, setActiveMember] = React.useState(0);

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
      member: []
    };

    let alumni_count = 0;
    let member_count = 0;
    let supervisor_count = 0;

    members.forEach(member => {
      // Check position for Alumni
      if (member.position.toLowerCase() === 'alumni') {
				result.alumni.push(member);
				alumni_count++;
      }
      // Check position for Supervisor
      else if (member.position.toLowerCase() === 'supervisor') {
				result.supervisor.push(member);
				supervisor_count++;
      }
      else {
				result.member.push(member);
				member_count++;
      }
    });

    setAlumni(alumni_count);
    setActiveMember(member_count);
    setSupervisor(supervisor_count);
    
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
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
				<Container 
					maxWidth='false'
					sx={{ maxWidth: '900px'}}
					style={{ paddingLeft: 0, paddingRight: 0}}
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
							<Typography variant='h5'>Supervisor</Typography>
							<Typography variant='h2'>{supervisor}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
							<Typography variant='h5'>Members</Typography>
							<Typography variant='h2'>{activeMember}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
							<Typography variant='h5'>Alumni</Typography>
							<Typography variant='h2'>{alumni}</Typography>
						</Stack>
					</Stack>
					<Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
					<RegistrationButton onClick={() => navigateTo(navigate, '/members/registration')} />
				</Container>
        <Box my={10}/>
				{/* Member card */}
        <Typography variant='h4' textAlign='center' my={4}>Supervisor</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.supervisor.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <Typography variant='h4' textAlign='center' my={4}>Current members</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.member.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <Typography variant='h4' textAlign='center' my={4}>Alumni</Typography>
        <Grid container spacing={4} justifyContent='center'>
          {memberData.alumni.map((member) => (
            <MemberCard member={member} />
          ))}
        </Grid>
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
      </Container>
    </main>
  );
}
