import { styled } from '@mui/material/styles';
import { Card as MuiCard } from '@mui/material';

const Card = styled(MuiCard, {
	shouldForwardProp: (prop) => prop !== 'width',
  })(({ theme, width }) => ({
	  display: 'flex',
	  flexDirection: 'column',
	  alignSelf: 'center',
	  gap: theme.spacing(4),
	  width: '100%',
	  padding: theme.spacing(2),
	  boxShadow:
		  'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
	  [theme.breakpoints.up('sm')]: {
		  padding: theme.spacing(4),
		  width: width || '450px',
	  },
	  ...theme.applyStyles('dark', {
		  boxShadow:
			  'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
	  }),
  }));

export default Card;