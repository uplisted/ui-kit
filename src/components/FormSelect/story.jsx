import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import FormSelect from './index';

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

storiesOf('FormSelect', module)
  .add('default', withInfo(() => {
    return (
      <FormSelect
        options={options}
        value="one"
        onChange={() => false}
      />
    );
  }));
