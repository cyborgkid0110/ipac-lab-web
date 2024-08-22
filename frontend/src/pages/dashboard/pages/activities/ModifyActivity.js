import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Textarea from '../../components/Textarea';
import CustomDatePicker from '../../components/CustomDatePicker';
import dayjs from 'dayjs';
import ConfirmBackdrop from '../../components/ConfirmBackdrop';
import { useLocation } from 'react-router-dom';

function changeDateFormat(dateString) {
  // Create a new Date object from the input string
  const dateObject = new Date(dateString);

  // Extract the year, month, and day
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() is zero-indexed
  const day = dateObject.getDate();

  // Combine into the Year-Month-Day format without leading zeros
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

export default function ModifyActivity() {
	// rows, columns: ID, name, 

  const location = useLocation();
  const { data } = location.state;

  const [name, setName] = React.useState(data.name);
  const [content, setContent] = React.useState(data.content);
  const [time, setTime] = React.useState(dayjs(changeDateFormat(data.time)));
  const [open, setOpen] = React.useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

	const modifyActivityData = () => { 
    
	}

  const handleModify = () => {

  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Box my={3} />
      <Typography textAlign='center' variant='h3'>
        Modify Activity
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
            >Activity</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='Activity'
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
            >Time</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomDatePicker 
              open={open}
              value={time}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              onChange={(event) => setTime(event)}
              setOpen={setOpen}
              buttonSize='large'
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={2} alignSelf='center'>
            <Typography pr={3} variant='h6'
              sx={{
                textAlign: {xs: 'left', md: 'right'}
              }}
            >Content</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={2}
              placeholder='Detail of the activity'
              defaultValue={data.content}
              onChange={handleContentChange}
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
