import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Flex from './index';

storiesOf('Flex', module)
  .add('justify: space-around', withInfo(() => (
    <Flex xs={{ align: 'center', justify: 'space-around' }}>
      <div>Hello</div>
      <div>Hello</div>
    </Flex>
  )));
