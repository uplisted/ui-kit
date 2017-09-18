import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TimeLine from './index';

const onToggle = () => {
  return false;
};

const style = {
  width: 300,
  height: 300,
  marginTop: 20,
  marginLeft: 20,
};

storiesOf('TimeLine', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <TimeLine isCollapsed={false} onToggle={onToggle}>
          Hello World
        </TimeLine>
      </div>
    );
  }));
