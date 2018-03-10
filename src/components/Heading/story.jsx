import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Heading from './index';

storiesOf('Heading', module)
  .add('default', withInfo(() => <Heading>This is Heading</Heading>));
