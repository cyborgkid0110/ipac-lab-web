import { Typography } from "@mui/material"
import * as React from 'react';

const PageTitle = ({ header, title, abstract }) => {
  return (
    <>
      {header ? 
      <Typography textAlign='center' variant='h6' my={1} fontSize='12px' style={{ color: 'gray' }}>{header}</Typography>
      :
      <></>
      }
      {title ? 
      <Typography textAlign='center' variant='h2' my={1} fontWeight='normal'>{title}</Typography>
      :
      <></>
      }
      {abstract ? 
      <Typography textAlign='center' variant='h5' fontWeight='normal' style={{ color: 'gray' }}>{abstract}</Typography>
      :
      <></>
      }
    </>
  )
};

export default PageTitle;