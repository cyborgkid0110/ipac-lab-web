import * as React from 'react';
import { Box, Typography, Grid, Button, List } from '@mui/material';
import NewsItem from './NewsItem';

export default function NewsList({ title, abstract, type, numberOfPosts, posts}) {
  const typeLabel = (type) => {
    if (type === 'publication') return 'publications'
    else if (type === 'activity') return 'activities'
    else return 'items'
  }

  return (
    <>
      <Grid container display='flex'>
        <Grid item xs={12}>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='h6' style={{ color: 'gray' }}>
            {abstract}
          </Typography>
        </Grid>
      </Grid>
      <Box my={8} />
      <Typography variant='h6' my={1} fontSize='12px' style={{ color: 'gray' }}>{`${numberOfPosts} ${typeLabel(type)}`}</Typography>
      <List>
        {posts.map((article) => (
          <NewsItem post={article} />
        ))}
      </List>
      <Box my={3} />  
      <Grid container justifyContent='center'>
        <Button color='primary' variant='contained' sx={{
          fontSize: '18px',
          padding: 3,
          borderRadius: 3
        }}
        >
          Load more
        </Button>
      </Grid>
    </>
  );
}
