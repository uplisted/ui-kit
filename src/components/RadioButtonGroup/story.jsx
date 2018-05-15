import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import RadioButtonGroup from './index';

const options = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
  {
    value: 'three',
    label: 'Three',
  },
];

storiesOf('RadioButtonGroup', module)
  .add('default', withInfo(() => (
    <RadioButtonGroup options={options} value="one" onChange={() => false} />
  )));
