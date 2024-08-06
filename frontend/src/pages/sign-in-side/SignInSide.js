import * as React from 'react';
import Stack from '@mui/material/Stack';
import SignInCard from './SignInCard';
import Content from './Content';

export default function SignInSide() {
  return (
    <Stack
      direction="column"
      component="main"
      sx={[
        {
          justifyContent: 'space-between',
        },
        (theme) => ({
          backgroundImage:
            'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
          backgroundSize: 'cover',
          height: { xs: 'auto', md: '100dvh' },
          pb: { xs: 12, sm: 0 },
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
          }),
        }),
      ]}
    >
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{
          justifyContent: 'center',
          gap: { xs: 6, sm: 12 },
          height: { xs: '100%', md: '100dvh' },
          p: 2,
        }}
      >
        <Content />
        <SignInCard />
      </Stack>
    </Stack>
  );
}

