import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import AddressInput from './index';

const onChange = () => {
  return false;
};

const style = {
  width: 600,
  height: 300,
  backgroundColor: '#c6c6c6',
  padding: 20,
};

storiesOf('AddressInput', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <AddressInput
          value=""
          placeholder="Type Here..."
          onChange={onChange}
        />
      </div>
    );
  }));
