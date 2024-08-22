import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomizedDataGrid({ rows, columns, pageSize, handleRowClick, checkboxSelection, handleSelectionChange }) {
  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      onRowClick={handleRowClick}
      checkboxSelection={checkboxSelection}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: pageSize } },
      }}
      pageSizeOptions={[5, 10, 20, 50]}
      disableColumnResize
      disableRowSelectionOnClick
      density="compact"
      onRowSelectionModelChange={handleSelectionChange}
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
}
