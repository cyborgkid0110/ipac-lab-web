import * as React from 'react'; 
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
	Divider,
} from "@mui/material";
import { IconMail, IconUser, IconSettings, IconCode } from "@tabler/icons-react";
import { Link as LinkURL } from 'react-router-dom';

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"	
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src="/images/profile/user-1.jpg"		// image url
          alt="image"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconSettings width={20} />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
				<Divider variant='middle'  />
				<LinkURL to='/developer' style={{ textDecoration: 'none', color: 'black'}}>
          <MenuItem>
            <ListItemIcon>
              <IconCode width={20} />
            </ListItemIcon> 
            <ListItemText>Developer Settings</ListItemText>
          </MenuItem>
        </LinkURL>
        <Box mt={1} py={1} px={2}>
					<LinkURL to='/login' style={{ textDecoration: 'none'}}>
						<Button
							href="/authentication/login"
							variant="outlined"
							color="primary"	
							fullWidth
						>
            Logout
          	</Button>
					</LinkURL>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;