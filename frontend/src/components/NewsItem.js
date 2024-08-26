import * as React from 'react';
import { Typography, Grid, ListItem, ListItemText, Divider, ListItemButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NewsItem({ post }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton style={{
          padding: '8px 0px 8px',
        }}
          sx={{
            position: 'relative',
            backgroundColor: 'transparent', // Keep the background transparent or set your desired color
            '&:hover': {
              backgroundColor: 'transparent', // Remove the default darker effect on hover
              '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#2196f3',
              transform: 'scaleX(0)', // Initially hidden (no border)
              transformOrigin: 'bottom right',
              transition: 'transform 0.3s ease-in-out', // Transition effect
            },
          }}
        >
          <ListItemText>
            <Grid container>
              <Grid item xs={12} sm={2}>
                {post.year ? 
                <Typography variant='h5'>{post.year}</Typography>
                :
                <Typography variant='h5'>{post.time}</Typography>
                }
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography variant='h6'>{post.title}</Typography>
                {post.author ?
                <Typography variant='h6' fontWeight='normal'>{post.author}</Typography>
                :
                <Typography variant='h6' fontWeight='normal'>{post.content}</Typography>
                }
              </Grid>
              <Grid item container xs={12} sm={1} display='flex' justifyContent='flex-end' alignContent='flex-end'>
                <ArrowForwardIcon color='primary' />
              </Grid>
            </Grid>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider component="li" />
    </>
  );
}
