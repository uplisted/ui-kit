import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import DropDownList from './index';

const options = [
  {
    value: 'one',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
];

storiesOf('DropDownList', module)
  .add('default', withInfo(() => {
    return (
      <DropDownList
        options={options}
        value="two"
        onChange={() => false}
      />
    );
  }));
