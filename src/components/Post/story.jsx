import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Post from './index';
import TimeLine from '../TimeLine';

storiesOf('Post', module)
  .add('default', withInfo(() => {
    return (
      <TimeLine isCollapsed={false} onToggle={() => false}>
        <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsum" />
        <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsumdasdasdasdsdasdasdds" />
        <Post title="Hello World" date="12 Jan 2017" description="Lorem ipsum" />
      </TimeLine>
    );
  }));
