import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Background from './index';

storiesOf('Background', module)
  .add('background color', withInfo(() => {
    return (
      <div style={{ width: '100%', height: 500 }}>
        <Background color="#f0f3f7">
          Hello World
        </Background>
      </div>
    );
  }))
  .add('background image', withInfo(() => {
    return (
      <div style={{ width: '100%', height: 600 }}>
        <Background url="http://coolwallpaperz.info/user-content/uploads/wall/o/74/architecture-x-minimalist-cafe-1179327.jpg">
          Hello World
        </Background>
      </div>
    );
  }));
