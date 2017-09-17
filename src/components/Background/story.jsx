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
        <Background url="https://st.depositphotos.com/3562663/5051/i/950/depositphotos_50519051-stock-photo-big-house-modern-style-with.jpg">
          Hello World
        </Background>
      </div>
    );
  }));
