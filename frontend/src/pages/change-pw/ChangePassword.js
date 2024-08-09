import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
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

export default function ChangePassword() {
  const [oldPasswordError, setOldPasswordError] = React.useState(false);
  const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');

  const validateInputs = () => {
    const old_password = document.getElementById('old_password');
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm_password');
    const upperCasePattern = /[A-Z]/;   // Matches an uppercase letter
    const lowerCasePattern = /[a-z]/;   // Matches a lowercase letter
    const digitPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // Matches a special character
    const passwordErrorMessage = 'Password must has at least 8 characters long, 1 upper and 1 lower case, 1 number digit and 1 special character'

    let isValid = true;

    if (!old_password.value || old_password.value.length < 8) {
			setOldPasswordError(true);
			setOldPasswordErrorMessage('Password must be at least 8 characters long.');
			isValid = false;
    } else {
			setOldPasswordError(false);
			setOldPasswordErrorMessage('');
    }

		// check if new password has at least 8 characters, 1 upper and 1 lower case, 1 digit, 1 special character
    if (!password.value || password.value.length < 8 || 
			!upperCasePattern.test(password.value) || !lowerCasePattern.test(password.value) || 
			!specialCharPattern.test(password.value) || !digitPattern.test(password.value))
    {
      setPasswordError(true);
      setPasswordErrorMessage(passwordErrorMessage);
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!confirm_password.value ||confirm_password.value === password.value) {
			setConfirmPasswordError(false);
			setConfirmPasswordErrorMessage('');
			isValid = false;
    } else {
			setConfirmPasswordError(true);
			setConfirmPasswordErrorMessage('Confirm password did not match');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      old_password: data.get('old_password'),
      password: data.get('password'),
      confirm_password: data.get('confirm_password'),
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
        <Card>
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Change password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="password">Old password</FormLabel>
              <TextField
                required
                fullWidth
                name="old_password"
                placeholder="••••••"
                type="password"
                id="old_password"
                autoComplete="old-password"
                variant="outlined"
                error={oldPasswordError}
                helperText={oldPasswordErrorMessage}
                color={oldPasswordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">New password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Confirm password</FormLabel>
              <TextField
                required
                fullWidth
                name="confirm_password"
                placeholder="••••••"
                type="password"
                id="confirm_password"
                autoComplete="confirm-password"
                variant="outlined"
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                color={confirmPasswordError ? 'error' : 'primary'}
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
