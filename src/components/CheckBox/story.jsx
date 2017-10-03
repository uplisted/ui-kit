import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import CheckBox from './index';

const onChange = () => {
  return false;
};

storiesOf('CheckBox', module)
  .add('default', withInfo(() => {
    return (
      <CheckBox onChange={onChange} isChecked />
    );
  }));
