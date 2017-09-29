import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import LineChart from './index';

const data = [
  {
    date: '08/21',
    value: 210,
  },
  {
    date: '08/22',
    value: 300,
  },
  {
    date: '08/23',
    value: 140,
  },
  {
    date: '08/24',
    value: 160,
  },
  {
    date: '08/25',
    value: 300,
  },
  {
    date: '08/26',
    value: 30,
  },
];

storiesOf('LineChart', module)
  .add('simple', withInfo(() => {
    return (
      <LineChart data={data} />
    );
  }));
