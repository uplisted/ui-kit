import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Flex from './index';

storiesOf('Flex', module)
  .add('center alignment', withInfo(() => {
    return (
      <Flex xs={{ align: 'center', justify: 'center' }}>
        <div>Hello</div>
        <div>Hello</div>
      </Flex>
    );
  }));
