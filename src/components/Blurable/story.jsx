import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withInfo from '../withInfo';

import Blurable from './index';

const content = (
  <div style={{ width: 200, height: 200, backgroundColor: '#7178ff' }}>
    Blurable content
  </div>
);

storiesOf('Blurable', module)
  .add('simple', withInfo(() => {
    return (
      <Blurable content={content} isOpen onClose={action('blur-detected')}>
        Target content
      </Blurable>
    );
  }));
