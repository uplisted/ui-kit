import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Input from './index';

storiesOf('Input', module)
  .add('default', withInfo(() => (
    <div style={{ width: 300, marginTop: 15, marginLeft: 15 }}>
      <Input value="" onChange={() => false} bordered />
    </div>
  )))
  .add('bottom border', withInfo(() => (
    <div style={{ width: 300, marginTop: 15, marginLeft: 15 }}>
      <Input value="" onChange={() => false} bordered={false} />
    </div>
  )))
  .add('has error', withInfo(() => (
    <div style={{ width: 300, marginTop: 15, marginLeft: 15 }}>
      <Input value="" hasError onChange={() => false} bordered />
    </div>
  )));
