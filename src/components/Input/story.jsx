import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Input from './index';

storiesOf('Input', module)
  .add('default', withInfo(() => <Input value="" onChange={() => false} bordered />))
  .add('bottom border', withInfo(() => <Input value="" onChange={() => false} bordered={false} />));
