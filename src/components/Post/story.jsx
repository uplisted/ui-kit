import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Post from './index';
import TimeLine from '../TimeLine';

const style = {
  width: 300,
  height: 300,
  marginTop: 20,
  marginLeft: 20,
};

const onToggle = () => {
  return false;
};

storiesOf('Post', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <TimeLine isCollapsed={false} onToggle={onToggle}>
          <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsum" />
          <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsumdasdasdasdsdasdasdds" />
          <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsum" />
        </TimeLine>
      </div>
    );
  }));
