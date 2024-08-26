import * as React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

export default function MemberCard({ member }) {
  return (
  <Grid item xs={12} md={4} lg={3}>
    <Stack
      direction='column'
      spacing={1}
      justifyContent='flex-start'
      alignItems='center'
    >
      <Box
        key={`member-id${member.id}`}
        component="img"
        src={member.image}
        alt='member_pic'
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: '300px',
            objectFit: 'cover',
          }}
      />
      <Typography variant='h5'>{member.name}</Typography>
      <Typography variant='h6' fontWeight='normal'>{member.research_topic}</Typography>
    </Stack>
  </Grid>
  );
}
