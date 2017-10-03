import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Padding from './index';

const style = {
  backgroundColor: '#7178ff',
  width: 300,
  height: 300,
};

storiesOf('Padding', module)
  .add('padded container', withInfo(() => {
    return (
      <div style={style}>
        <Padding padding={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          Hello World
        </Padding>
      </div>
    );
  }))
  .add('shortcut', withInfo(() => {
    return (
      <div style={style}>
        <Padding padding={10}>
          Hello World
        </Padding>
      </div>
    );
  }));
