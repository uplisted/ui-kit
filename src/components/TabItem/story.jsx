import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TabItem from './index';

storiesOf('TabItem', module)
  .add('default', withInfo(() => (
    <div>
      <TabItem onClick={() => false} isActive>Home</TabItem>
      <TabItem onClick={() => false} isActive={false}>About</TabItem>
    </div>
  )));
