import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Textarea from '../../components/Textarea';
import CustomDatePicker from '../../components/CustomDatePicker';
import dayjs from 'dayjs';
import ConfirmBackdrop from '../../components/ConfirmBackdrop';

function changeDateFormat(dateString) {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export default function AddActivity() {
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');
  const [time, setTime] = React.useState(dayjs(changeDateFormat('January 1, 1970')));
  const [open, setOpen] = React.useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

	const modifyActivityData = () => { 
    
	}

  const handleAdd = () => {

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
        Add Activity
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
              defaultValue={name}
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
              defaultValue={content}
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
          title='Are you sure you want to add this?'
          handleConfirm={handleAdd}
          open={openBackdrop}
          setOpen={setOpenBackdrop}
        />
      </Stack>
    </Box>
  );
}
