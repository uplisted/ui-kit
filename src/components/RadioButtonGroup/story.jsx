import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import RadioButtonGroup from './index';

const onChange = () => {
  return false;
};

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

const style = {
  width: 300,
  height: 300,
  marginTop: 20,
  marginLeft: 20,
};

storiesOf('RadioButtonGroup', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <RadioButtonGroup options={options} value="one" onChange={onChange} />
      </div>
    );
  }));
