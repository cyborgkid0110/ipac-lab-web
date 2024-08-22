import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Textarea from '../../components/Textarea';
import ConfirmBackdrop from '../../components/ConfirmBackdrop';
import { useLocation } from 'react-router-dom';

export default function ModifyArticle() {
	// rows, columns: ID, author, year, title, (abstract), (url)

  const location = useLocation();
  const { data } = location.state;

  const [author, setAuthor] = React.useState(data.author);
  const [title, setTitle] = React.useState(data.title);
  const [year, setYear] = React.useState(data.year);
  const [url, setURL] = React.useState(data.url);
  const [abstract, setAbstract] = React.useState(data.abstract);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

	const modifyArticleData = () => {
		
	}

  const handleModify = () => {
		
	}

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleURLChange = (event) => {
    setURL(event.target.value);
  }

  const handleAbstractChange = (event) => {
    setAbstract(event.target.value);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Box my={3} />
      <Typography textAlign='center' variant='h3'>
        Modify Publication
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
            >Title</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={2}
              placeholder='Article title'
              defaultValue={data.title}
              onChange={handleTitleChange}
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
            >Author</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='Author of the article'
              defaultValue={data.author}
              onChange={handleAuthorChange}
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
            >Year</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='Publish year'
              defaultValue={data.year}
              onChange={handleYearChange}
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
            >URL</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={1}
              placeholder='Article URL'
              defaultValue={data.url}
              onChange={handleURLChange}
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
            >Abstract</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Textarea
              maxRows={7}
              placeholder='Abstract of the article'
              defaultValue={data.abstract}
              onChange={handleAbstractChange}
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
