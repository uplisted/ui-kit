import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Input from './index';

storiesOf('Input', module)
  .add('full bordered', withInfo(() => {
    return (
      <Input value="" onChange={() => false} bordered />
    );
  }))
  .add('bottom border', withInfo(() => {
    return (
      <Input value="" onChange={() => false} bordered={false} />
    );
  }));
