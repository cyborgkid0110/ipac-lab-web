import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    size,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled} 
      ref={ref}
      aria-label={ariaLabel}
      size={size == null ? 'small' : size}
      onClick={() => setOpen?.((prev) => !prev)}
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ minWidth: 'fit-content' }}
    >
      {label ? `${label}` : 'Pick a date'}
    </Button>
  );
}

ButtonField.propTypes = {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.shape({
    'aria-label': PropTypes.string,
  }),
  InputProps: PropTypes.shape({
    endAdornment: PropTypes.node,
    startAdornment: PropTypes.node,
  }),
  label: PropTypes.node,
  setOpen: PropTypes.func,
  size: PropTypes.string,
};

export default function CustomDatePicker({ value, open, buttonSize, onOpen, onClose, setOpen, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        label={value == null ? null : value.format('MMMM DD, YYYY')}
        onChange={onChange}
        slots={{ field: ButtonField }}
        slotProps={{
          field: { setOpen, size: buttonSize },
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        views={['day', 'month', 'year']}
      />
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  value: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  buttonSize: PropTypes.string.isRequired,
  onOpen: PropTypes.any.isRequired,
  onClose: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
  setOpen: PropTypes.any.isRequired,
}