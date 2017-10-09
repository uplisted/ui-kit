import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TriggerCard from './index';

const rule = {
  date: '12 Jan 2017',
  boostDays: 5,
  dailyBudget: '$200',
  name: 'Test',
};

storiesOf('TriggerCard', module)
  .add('default', withInfo(() => {
    return (
      <TriggerCard rule={rule} />
    );
  }));
