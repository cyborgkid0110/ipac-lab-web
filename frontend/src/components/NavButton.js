import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import * as React from 'react';

const NavButton = ({ title, path }) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(path)}>
      <Typography variant='h6' style={{ color: 'gray'}}>{title}</Typography>
    </Button>
  )
}

export default NavButton;