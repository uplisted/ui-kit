import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import SelectMenu from './index';

const options = [
  {
    value: 'one',
    label: 'One',
  },
];

const style = {
  width: 260,
  height: 300,
  marginLeft: 20,
  marginTop: 20,
};

const onChange = () => {
  return false;
};

storiesOf('SelectMenu', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <SelectMenu
          options={options}
          value="one"
          onChange={onChange}
        />
      </div>
    );
  }));
