import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Text from './index';

storiesOf('Text', module)
  .add('default', withInfo(() => <Text>This is text</Text>));
