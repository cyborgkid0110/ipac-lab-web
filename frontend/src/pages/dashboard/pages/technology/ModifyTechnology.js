import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Textarea from '../../components/Textarea';
import ConfirmBackdrop from '../../components/ConfirmBackdrop';
import { useLocation } from 'react-router-dom';

export default function ModifyTechnology({ technologyData }) {
	// rows, columns: ID, name, content

  const location = useLocation();
  const { data } = location.state;

  const [name, setName] = React.useState(data.name);
  const [content, setContent] = React.useState(data.content);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

	const modifyTechnologyData = () => {
		
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
        Modify Technology
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
              placeholder='Technology name'
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
            >Content</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={3}
              placeholder='Description of the technology'
              defaultValue={data.content}
              onChange={handleContentChange}
              sx={{ width: '100%', fontSize: '16px', resize: 'none'}}
            />
          </Grid>
        </Grid>
        <Button 
          size='large' variant='outlined'
          sx={{alignSelf: 'center', fontWeight: 'bold', borderWidth: '2px'}}
          onClick={() => setOpenBackdrop(true)}
        >Submit</Button>
      </Stack>
      <ConfirmBackdrop
        title='Are you sure you want to modify this?'
        handleConfirm={handleModify}
        open={openBackdrop}
        setOpen={setOpenBackdrop}
      />
    </Box>
  );
}
