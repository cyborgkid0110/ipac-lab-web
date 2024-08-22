import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Member() {
  	// rows, columns: ID, name, course, major(position), research_topic(position2)
	const columns = [
    { field: 'name', headerName: 'Member Name', flex: 1, minWidth: 200 },
    {
      field: 'course',
      headerName: 'Course',
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      minWidth: 80,
    },
    {
      field: 'position',
      headerName: 'Position',
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'research_topic',
      headerName: 'Research Topic',
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      minWidth: 100,
    },
  ];

  const rows = [
    {
      id: 1,
      name: 'Tran Quang Anh',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
    },
    {
      id: 2,
      name: 'Pham Huy Tuyen',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
    },
    {
      id: 3,
      name: 'Phan Duc Manh',
      course: 65,
      position: 'Alumni',
      research_topic: 'Smart farm',
    },
    {
      id: 4,
      name: 'Tran Son',
      course: 65,
      position: 'Member',
      research_topic: 'Smart farm',
    },
    {
      id: 5,
      name: 'Do Tien Hai',
      course: 64,
      position: 'Alumni',
      research_topic: 'Smart farm',
    },
    {
      id: 6,
      name: 'Do Tien Dung',
      course: 65,
      position: 'Alumni',
      research_topic: 'Smart biogas',
    },
    {
      id: 7,
      name: 'Hoang Duc Chinh',
      course: 48,
      position: 'Supervisor',
      research_topic: '',
    },
    {
      id: 8,
      name: 'Tran Phuong Du',
      course: 66,
      position: 'Member',
      research_topic: 'Smart farm',
    },
    {
      id: 9,
      name: 'Nguyen Duc Minh',
      course: 67,
      position: 'Member',
      research_topic: 'AGV',
    }
  ]

  const [selectedRowCount, setSelectedRowCount] = React.useState(0);
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    navigate('/developer/member/modify', { state: { data: params.row } });
  };

  const handleAddButton = () => {
    navigate('/developer/member/add');
  }

	const getMemberData = () => {
		
	}

  const handleRowCount = (rows) => {
    setSelectedRowCount(rows.length);
  }

  const handleDeleteMember = () => {}

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Lab members
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
              onClick={handleDeleteMember}
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
