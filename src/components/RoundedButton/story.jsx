import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import RoundedButton from './index';

storiesOf('RoundedButton', module)
  .add('default', withInfo(() => {
    return (
      <RoundedButton>+</RoundedButton>
    );
  }))
  .add('white', withInfo(() => {
    return (
      <RoundedButton white>+</RoundedButton>
    );
  }));
