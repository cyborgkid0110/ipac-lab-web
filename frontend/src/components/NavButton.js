import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import { navigateTo } from "./navigateTo";

const NavButton = ({ title, path }) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigateTo(navigate, path)}
      sx={{
        padding: '6px 0px',
        color: 'gray',
        ':hover': {
          color: 'black',
          backgroundColor: 'transparent'
        },
      }}
    >
      <Typography variant='h6'>{title}</Typography>
    </Button>
  )
}

export default NavButton;