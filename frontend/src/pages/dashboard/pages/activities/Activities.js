import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Activities() {
  // rows, columns: ID, name, time, content
	const columns = [
    { field: 'name', headerName: 'Activity', flex: 1, minWidth: 150 },
    {
      field: 'time',
      headerName: 'Time',
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'content',
      headerName: 'Content',
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      minWidth: 100,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Graduation celebration",
      time: "July 15, 2023",
      content: "More info",
    },
    {
      id: 2,
      name: "AI Integration in Healthcare",
      time: "July 20, 2023",
      content: "Artificial intelligence is increasingly being used in healthcare to improve diagnostics, streamline operations, and enhance patient care through predictive analytics.",
    },
    {
      id: 3,
      name: "5G Network Expansion",
      time: "July 31, 2023",
      content: "The global rollout of 5G technology is accelerating, promising faster data speeds, lower latency, and enhanced connectivity for IoT devices.",
    },
    {
      id: 4,
      name: "Quantum Computing Advancements",
      time: "August 1, 2023",
      content: "Researchers are making strides in quantum computing, which could revolutionize fields like cryptography, materials science, and drug discovery with its unprecedented processing power.",
    },
    {
      id: 5,
      name: "Meta's AI Chatbots",
      time: "August 6, 2023",
      content: "Meta (formerly Facebook) recently introduced AI-powered chatbots for its platforms, aiming to improve user interactions and customer service.",
    },
    {
      id: 6,
      name: "Green Tech Innovations",
      time: "August 13, 2023",
      content: "The push for sustainability has led to new breakthroughs in green technologies, such as carbon capture and renewable energy solutions aimed at mitigating climate change.",
    },
  ];

  const [selectedRowCount, setSelectedRowCount] = React.useState(0);
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    navigate('/developer/activity/modify', { state: { data: params.row } });
  };

  const handleAddButton = () => {
    navigate('/developer/activity/add');
  }

  const getActivityData = () => {
    
  }

  const handleRowCount = (rows) => {
    setSelectedRowCount(rows.length);
  }

  const handleDeleteActivities = () => {}

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Activities
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
              onClick={handleDeleteActivities}
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
