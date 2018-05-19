import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Blurable from './index';

const content = (
  <div>
    Blurable content
  </div>
);

storiesOf('Blurable', module)
  .add('default', withInfo(() => (
    <Blurable
      content={content}
      isOpen
      onToggle={() => false}
      closeOnContentClick={false}
    >
      <div>
        Target content
      </div>
    </Blurable>
  )));
