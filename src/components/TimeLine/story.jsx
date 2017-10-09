import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TimeLine from './index';

storiesOf('TimeLine', module)
  .add('default', withInfo(() => {
    return (
      <TimeLine isCollapsed={false} onToggle={() => false}>
        Hello World
      </TimeLine>
    );
  }));
