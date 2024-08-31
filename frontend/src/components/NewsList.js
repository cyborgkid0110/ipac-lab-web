import * as React from 'react';
import { Box, Typography, Grid, Button, List } from '@mui/material';
import NewsItem from './NewsItem';
import PostTitle from './PostTitle';

export default function NewsList({ title, abstract, type, numberOfPosts, posts}) {
  const typeLabel = (type) => {
    if (type === 'publication') return 'publications'
    else if (type === 'activity') return 'activities'
    else return 'items'
  }

  return (
    <>
      <PostTitle title={title} abstract={abstract} />
      <Box my={8} />
      <Typography variant='h6' my={1} fontSize='12px' style={{ color: 'gray' }}>{`${numberOfPosts} ${typeLabel(type)}`}</Typography>
      <List>
        {posts.map((article) => (
          <NewsItem post={article} />
        ))}
      </List>
      <Box my={3} />  
      <Grid container justifyContent='center'>
        <Button variant='contained' sx={{
          fontSize: '18px',
          padding: 3,
          borderRadius: 3,
          backgroundColor: '#1a73e8',
          backgroundImage: 'none',
          ':hover': {
            backgroundColor: '#2975CA',
          },
        }}
        >
          Load more
        </Button>
      </Grid>
    </>
  );
}
