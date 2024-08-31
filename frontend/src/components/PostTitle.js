import { Button, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { navigateTo } from "./navigateTo";

const PostTitle = ({ title, abstract, navText, navigatePath}) => {
  const navigate = useNavigate();
  if (title && abstract)
  return (
    <Grid container display='flex'>
      <Grid item xs={12} md={8} sx={{
        justifyContent: {xs: 'center', md: 'left'}
      }}>
        <Typography variant='h4' sx={{
          textAlign: {xs: 'center', md: 'left'},
        }}>{title}</Typography>
        <Typography variant='h6' style={{ color: 'gray' }}
          sx={{
            textAlign: {xs: 'center', md: 'left'},
            paddingBottom: {xs: '8px', md: '0px'}
          }}
        >{abstract}</Typography>
      </Grid>
      {navText ?
      <Grid item xs={12} md={4} alignContent='center' display='grid'
        sx={{
          justifyContent: {xs: 'center', md: 'right'}
        }}
      >
        <Button onClick={() => navigateTo(navigate, navigatePath)}
          sx={{
            ':hover': {
              backgroundColor: 'transparent'
            }
          }}  
        >
          <Typography variant='h5' color='primary'>
            {navText}
          </Typography>
        </Button>
      </Grid>
      : <></>
      }
    </Grid>
  )
  else return (<></>)
};

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  navText: PropTypes.string.isRequired,
  navigatePath: PropTypes.string.isRequired,
};

export default PostTitle;