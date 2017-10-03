import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import DateRangePicker from './index';

const startDate = null;
const endDate = null;
const focusedInput = null;

storiesOf('DateRangePicker', module)
  .add('default', withInfo(() => {
    return (
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onDatesChange={() => false}
        focusedInput={focusedInput}
        onFocusChange={() => false}
      />
    );
  }));
