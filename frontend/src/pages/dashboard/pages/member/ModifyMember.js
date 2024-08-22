import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import Textarea from '../../components/Textarea';
import ConfirmBackdrop from '../../components/ConfirmBackdrop';
import { useLocation } from 'react-router-dom';

export default function ModifyMember({ memberData }) {
	// rows, columns: ID, name, course, major(position), research_topic(position2)

  const location = useLocation();
  const { data } = location.state;

  const [name, setName] = React.useState(data.name);
  const [course, setCourse] = React.useState(data.course);
  const [position, setPosition] = React.useState(data.major);
  const [researchTopic, setResearchTopic] = React.useState(data.research_topic);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

	const modifyMemberData = () => {
		
	}

  const handleModify = () => {

  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  }

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  }

  const handleResearchTopicChange = (event) => {
    setResearchTopic(event.target.value);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Box my={3} />
      <Typography textAlign='center' variant='h3'>
        Modify Member Information
      </Typography>
      <Box my={3} />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2} alignSelf='center'>
            <Typography pr={3} variant='h6'
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >Name</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={2}
              placeholder='Member name'
              defaultValue={data.name}
              onChange={handleNameChange}
              sx={{ width: '100%', fontSize: '16px', resize: 'none'}}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2} alignSelf='center'>
            <Typography pr={3} variant='h6'
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >Course</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='66 e.g. if student is K66'
              defaultValue={data.course}
              onChange={handleCourseChange}
              sx={{ width: '100%', fontSize: '16px', resize: 'none'}}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2} alignSelf='center'>
            <Typography pr={3} variant='h6'
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >Position</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              defaultValue={data.position}
              onChange={handlePositionChange}
            >
              <FormControlLabel value="Member" control={<Radio size='large' />} label="Member" />
              <FormControlLabel value="Alumni" control={<Radio size='large' />} label="Alumni" />
              <FormControlLabel value="Supervisor" control={<Radio size='large'  />} label="Supervisor" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2} alignSelf='center'>
            <Typography pr={3} variant='h6'
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >Research topic</Typography>
            <Typography pr={3} fontWeight="10px"
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >(Additional infomation)</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='Fill research topic or additional info of the member'
              defaultValue={data.research_topic}
              onChange={handleResearchTopicChange}
              sx={{ width: '100%', fontSize: '16px', resize: 'none'}}
            />
          </Grid>
        </Grid>
        <Button 
					size='large' variant='outlined' 
					sx={{
						alignSelf: 'center', 
						fontWeight: 'bold', 
						borderWidth: '2px'
					}}
					onClick={() => setOpenBackdrop(true)}
				>Submit</Button>
        <ConfirmBackdrop
          title='Are you sure you want to modify this?'
          handleConfirm={handleModify}
          open={openBackdrop}
          setOpen={setOpenBackdrop}
        />
      </Stack>
    </Box>
  );
}
