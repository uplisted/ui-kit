import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TriggerRuleGridView from './index';

const rule = {
  date: '12 Jan 2017',
  boostDays: 5,
  dailyBudget: '$200',
  name: 'Test',
};

storiesOf('TriggerRuleGridView', module)
  .add('simple', withInfo(() => {
    return (
      <TriggerRuleGridView rule={rule} />
    );
  }));
