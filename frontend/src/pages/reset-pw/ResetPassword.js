import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link as LinkURL } from 'react-router-dom';
import { SitemarkIcon } from './CustomIcons';
import Card from '../../components/Card';

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'auto',
  paddingBottom: theme.spacing(12),
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
    height: '100dvh',
  },
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))',
  }),
}));

export default function ResetPassword() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email');
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Stack
        sx={{
          justifyContent: 'center',
          height: { xs: '100%', sm: '100dvh' },
          p: 2,
        }}
      >
        <Card width='700px'>
          <SitemarkIcon />
          <Typography
            variant="h5"
            sx={{ width: '100%', textAlign: 'center', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Enter email address for reset password
          </Typography>
          <Typography
            variant="h6"
            sx={{ width: '100%', textAlign: 'center', fontSize: 'clamp(1rem, 10vw, 1.2rem)' }}
          >
            After submit email, a new password will be sent through email atmost 10 minutes.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Submit
            </Button>
          </Box>
        </Card>
      </Stack>
    </SignUpContainer>
  );
}
