import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import ReportDatePicker from './index';

storiesOf('ReportDatePicker', module)
  .add('default', withInfo(() => {
    return (
      <ReportDatePicker />
    );
  }));
