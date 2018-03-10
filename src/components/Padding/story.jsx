import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Padding from './index';

storiesOf('Padding', module)
  .add('shortcut', withInfo(() => <Padding padding={10}>Content</Padding>));
