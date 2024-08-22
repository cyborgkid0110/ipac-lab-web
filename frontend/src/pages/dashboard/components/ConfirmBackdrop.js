import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Backdrop, Button, Paper, Stack } from '@mui/material';

const ConfirmBackdrop = ({ title, handleConfirm, open, setOpen }) => {
  return (
    <Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
			onClick={() => setOpen(false)}
		>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h4' mb={3}>{title}</Typography>
				<Stack
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					spacing={2}
				>
					<Button variant='outlined'
						onClick={handleConfirm}
						sx={{alignSelf: 'center', fontWeight: 'bold', borderColor: 'black'}}
					>Confirm</Button>
					<Button variant='outlined'
						sx={{alignSelf: 'center', fontWeight: 'bold', borderColor: 'black'}}
					>Cancel</Button>
				</Stack>
			</Paper>
		</Backdrop>
  );
}

export default ConfirmBackdrop;