import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Technology() {
  // rows, columns: ID, name, content
	const columns = [
    { field: 'name', headerName: 'Technology', flex: 1, minWidth: 100 },
    {
      field: 'content',
      headerName: 'Content',
      headerAlign: 'right',
      align: 'right',
      flex: 1.75,
      minWidth: 100, 
    },
  ];

  const rows = [
    {
      id: 1,
      name: 'IoT Sensors',
      content: 'Devices that monitor environmental conditions like temperature, humidity, and occupancy, enabling automated adjustments for energy efficiency.'
    },
    {
      id: 2,
      name: 'Smart Thermostats',
      content: 'Programmable thermostats that learn user preferences and optimize heating and cooling for energy savings.'
    },
    {
      id: 3,
      name: 'Building Management Systems (BMS)',
      content: 'Centralized platforms that integrate and control building systems such as HVAC, lighting, and security.'
    },
    {
      id: 4,
      name: 'Smart Lighting',
      content: 'Energy-efficient lighting systems that adjust brightness based on occupancy or natural light levels.'
    },
    {
      id: 5,
      name: 'Access Control Systems',
      content: 'Advanced security systems that use biometrics, RFID, or mobile apps to manage building access and monitor security.'
    },
    {
      id: 6,
      name: 'Smart Elevators',
      content: 'Elevators that optimize travel time by predicting demand and grouping passengers with similar destinations.'
    },
  ]

  const [selectedRowCount, setSelectedRowCount] = React.useState(0);
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    navigate('/developer/technology/modify', { state: { data: params.row } });
  };

  const handleAddButton = () => {
    navigate('/developer/technology/add');
  }

  const getTechnologyData = () => {
    
  }

  const handleRowCount = (rows) => {
    setSelectedRowCount(rows.length);
  }

  const handleDeleteTechnology = () => {}

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Technologies
      </Typography>
      <Grid container spacing={2} columns={12} 
        sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row'}}}
      >
        <Grid item size={{ md: 12, lg: 9 }} xs={12}>
          <CustomizedDataGrid 
            rows={rows} columns={columns} 
            pageSize={20} checkboxSelection={true} 
            handleSelectionChange={handleRowCount}
            handleRowClick={handleRowClick}
          />
        </Grid>
        <Grid item size={{ md: 12, lg: 9 }} xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Button 
              variant='outlined' 
              disabled={selectedRowCount ? false : true}
              onClick={handleDeleteTechnology}
            >Delete</Button>
            <Button 
              variant='outlined'
              onClick={handleAddButton}
            >Add</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
