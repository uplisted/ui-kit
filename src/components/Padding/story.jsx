import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Padding from './index';

storiesOf('Padding', module)
  .add('padded container', withInfo(() => {
    return (
      <Padding padding={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        Hello World
      </Padding>
    );
  }))
  .add('shortcut', withInfo(() => {
    return (
      <Padding padding={10}>
        Hello World
      </Padding>
    );
  }));
