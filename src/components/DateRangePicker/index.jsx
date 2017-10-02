import React from 'react';
import ReactDates from 'react-dates';
import './component.scss';

const DateRangePicker = (props) => {
  return (
    <ReactDates.DateRangePicker {...props} />
  );
};

export default DateRangePicker;
