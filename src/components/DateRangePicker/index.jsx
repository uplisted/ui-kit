import React from 'react';
import { DateRangePicker as AirBnbDateRangePicker } from 'react-dates';
import './component.scss';

const DateRangePicker = (props) => {
  return (
    <AirBnbDateRangePicker {...props} />
  );
};

export default DateRangePicker;
